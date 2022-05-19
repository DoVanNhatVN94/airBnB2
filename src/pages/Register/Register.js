/** @format */

import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";

import "../../asset/css/register.css";
import { LayDSNguoiDungAction } from "../../redux/Actions/NguoiDungAction";
import { RegisterAction } from "../../redux/Actions/XacThucNguoiDungAction";

export default function Register() {
  let dispatch = useDispatch();
  const [width, setWidth] = useState(window.innerWidth);
  let wbg = "";
  if (width < 600) wbg = "100%";
  else wbg = "450px";

  const { dsNguoiDung } = useSelector((state) => state.nguoiDungReducer);
  console.log(dsNguoiDung);

  const taoDSNDEmail = dsNguoiDung?.map((nd) => {
    return nd.email;
  });
  console.log(taoDSNDEmail);

  useEffect(() => {
    dispatch(LayDSNguoiDungAction());

    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      address: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Mật khẩu không được để trống"),
      email: Yup.string()
        .required("Email khong duoc de trong")
        .email("Email ko đúng định dạng email")
        .notOneOf(taoDSNDEmail, "Email đã được sử dụng"),
      phone: Yup.string().required("Số điện thoai khong duoc de trong"),
      //matches : kiểm tra biểu thức
      name: Yup.string()
        .required("Họ Tên khong duoc de trong")
        .matches(
          /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/,
          "Tên chỉ có ký tự chữ hoy"
        ),
      address: Yup.string().required("Địa chỉ không được để trống"),
      birthday: Yup.string()
        .required("Chưa Nhập Ngày Sinh")
        .matches(
          /^(?:\d{4}\/(?:(?:(?:(?:0[13578]|1[02])\/(?:0[1-9]|[1-2][0-9]|3[01]))|(?:(?:0[469]|11)\/(?:0[1-9]|[1-2][0-9]|30))|(?:02\/(?:0[1-9]|1[0-9]|2[0-8]))))|(?:(?:\d{2}(?:0[48]|[2468][048]|[13579][26]))|(?:(?:[02468][048])|[13579][26])00)\/02\/29)$/,
          "Ngày Sinh Không Đúng Định Dạng yyyy/mm/dd"
        ),
      gender: Yup.boolean(),
    }),
    onSubmit: (values) => {
    
       dispatch(RegisterAction(values));
    },
  });

  return (
    <div>
      <div className="register-box m-auto " style={{ width: wbg }}>
        <h2>SIGN UP</h2>
        <form id="myForm" onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label>Email </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="email"
              className="form-control"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="alert alert-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              name="password"
              className="form-control"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="alert alert-danger">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label>Phone </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="phone"
              className="form-control"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="alert alert-danger">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label>Name</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="name"
              className="form-control"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="alert alert-danger">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label>Gender</label>
            <select
              name="gender"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="custom-select"
            >
              <option value="true">Girl</option>
              <option value="false">Boy</option>
            </select>
            {formik.touched.gender && formik.errors.gender ? (
              <div className="alert alert-danger">{formik.errors.gender}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label>Birthday</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="birthday"
              className="form-control"
            />
            {formik.touched.birthday && formik.errors.birthday ? (
              <div className="alert alert-danger">{formik.errors.birthday}</div>
            ) : null}
          </div>{" "}
          <div className="mb-3">
            <label>Address</label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="address"
              className="form-control"
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="alert alert-danger">{formik.errors.address}</div>
            ) : null}
          </div>
          <button type="submit" className="btn btn-primary">
            Dăng Ký
          </button>
        </form>
      </div>
    </div>
  );
}
