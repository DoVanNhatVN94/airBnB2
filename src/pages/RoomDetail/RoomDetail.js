/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Map";

import {
  Avatar,
  Button,
  DatePicker,
  Form,
  Image,
  Modal,
  Progress,
  Select,
} from "antd";
import Icon, {
  CalendarOutlined,
  HeartOutlined,
  HomeOutlined,
  SafetyOutlined,
  ShareAltOutlined,
  StarOutlined,
  TrophyOutlined,
  WifiOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import {
  TvOutlined,
  AcUnit,
  Hvac,
  Elevator,
  Restaurant,
} from "@mui/icons-material";

import { DSDanhGiaTheoPhongAction } from "../../redux/Actions/DanhGiaAction";
import {
  DatPhongAction,
  ThongTinChiTietPhongAction,
} from "../../redux/Actions/PhongThueAction";
import { layDSVeTheoPhongAction } from "../../redux/Actions/VeAction";

import moment from "moment";

import "../../asset/css/roomdetail.css";

export default function RoomDetail(props) {
  const dispatch = useDispatch();
  const { dsDanhGia } = useSelector((state) => state.danhGiaReducer);
  const { chiTietPhong } = useSelector((state) => state.phongThueReducer);
  const { locationId } = chiTietPhong;
  const { dsVeIdroom } = useSelector((state) => state.VeReducer);
  console.log(dsVeIdroom);

  const { RangePicker } = DatePicker;
  const [dates, setDates] = useState([]);
  const [hackValue, setHackValue] = useState();
  const [value, setValue] = useState();
  let countDate = 0;

  const key = "AIzaSyA3HUkpN5-tSw68taF-syOrFnDp2rhDKZY"; //map

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [more, setMore] = useState(6);
  const [add, setAdd] = useState(6);

  const [isModalVisible, setIsModalVisible] = useState(false);

  //Form setting
  console.log(value, "value");

  useEffect(() => {
    dispatch(ThongTinChiTietPhongAction(props.match.params.id));
    dispatch(DSDanhGiaTheoPhongAction(props.match.params.id));
    dispatch(layDSVeTheoPhongAction(props.match.params.id));

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  //datepicker
  // const disableDateRanges = (range = { startDate: false, endDate: false }) => {
  //   const { startDate, endDate } = range;
  //   return function disabledDate(current) {
  //     let startCheck = true;
  //     let endCheck = true;
  //     if (startDate) {
  //       startCheck = current && current > moment(startDate, "YYYY-MM-DD");
  //     }
  //     if (endDate) {
  //       endCheck = current && current < moment(endDate, "YYYY-MM-DD");
  //     }
  //     return startDate && startCheck && endDate && endCheck;
  //   };
  // };
  const disableDate = (current) => {
    if (!dates || dates.length === 0) {
      return current && current < moment().endOf("day");
    }
    //S??? ng??y ??at it nhat 3 ngay
    const tooLate = dates[0] && current.diff(dates[0], "days") < 3;
    const tooEarly =
      (current && current < moment().endOf("day")) ||
      (dates[1] && dates[1].diff(current, "days") < 3);
    return tooEarly || tooLate;
  };
  const onOpenChange = (open) => {
    if (open) {
      console.log("onOpenChange");
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };

  const renderDanhGia = (more) => {
    return dsDanhGia?.slice(0, more)?.map((danhGia, index) => {
      return (
        <div className="col-6" key={index}>
          <div className="d-flex">
            <Avatar src={danhGia.userId.avatar} style={{ width: "30px" }} />
            <div className="m-2">
              <h5>{danhGia.userId.name}</h5>
              <span className="text text-secondary">
                {moment(danhGia.updatedAt).format("DD-MM-YYYY")}
              </span>
            </div>
          </div>
          <span>{danhGia.content}</span>
        </div>
      );
    });
  };
  const renderTienNghi = (add) => {
    const tienNghi = [];
    if (chiTietPhong.kitchen)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={1}>
          <i className="m-2">
            <Restaurant />
          </i>{" "}
          <p>B???p</p>
        </div>
      );
    if (chiTietPhong.cableTV)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={2}>
          <i className="m-2">
            <TvOutlined />
          </i>{" "}
          <p>TV v???i truy???n h??nh c??p ti??u chu???n</p>
        </div>
      );

    if (chiTietPhong.heating)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={3}>
          <i className="m-2">
            <AcUnit />
          </i>{" "}
          <p>??i???u H??a Nhi???t ?????</p>
        </div>
      );
    if (chiTietPhong.indoorFireplace)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={4}>
          <i className="m-2">
            <Hvac />
          </i>{" "}
          <p>L?? S?????i trong nh??</p>
        </div>
      );

    if (chiTietPhong.wifi)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={5}>
          <i className="m-2">
            <WifiOutlined />
          </i>{" "}
          <p>Wifi</p>
        </div>
      );
    if (chiTietPhong.elevator)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={6}>
          <i className="m-2">
            <Elevator />
          </i>{" "}
          <p>Thang m??y</p>
        </div>
      );
    if (chiTietPhong.pool)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={7}>
          <i className="fa fa-swimming-pool m-2"></i> <p>B??? b??i s???ch ?????p</p>
        </div>
      );
    if (chiTietPhong.hotTub)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={8}>
          <i className="fa fa-hot-tub m-2"></i>{" "}
          <p>C?? b???n n?????c n??ng ????? th?? gi???n</p>
        </div>
      );
    if (chiTietPhong.dryer)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={9}>
          <i className="fa fa-wind m-2"></i> <p>C?? m??y s???y ????? l??m kh?? t??c</p>
        </div>
      );
    if (chiTietPhong.gym)
      tienNghi.push(
        <div className="col-6 d-flex py-2" key={10}>
          <i className="fa fa-dumbbell m-2"></i>{" "}
          <p>C?? ph??ng t???p ho???c khu t???p gym</p>
        </div>
      );

    return tienNghi.slice(0, add);
  };
  // const checkIn = "2022-05-23T05:00:00.000Z";
  // const checkOut = "2022-05-26T05:00:00.000Z";

  const renderReducer = () => {
    if (value?.length === 0 || !value)
      return (
        <h5 className="w-100 text-danger text-center py-2">
          Vui l??ng th???c hi???n h???t thao t??c ?????t ph??ng
        </h5>
      );
    else {
      const endDay = new Date(value[1]);
      const startDay = new Date(value[0]);
      while (endDay > startDay) {
        countDate++;
        startDay.setDate(startDay.getDate() + 1);
      }

      return (
        <div className="col-12 text-center py-2">
          <div className="d-flex justify-content-between">
            <p>
              {chiTietPhong.price} x {countDate} ????m
            </p>{" "}
            <span>${chiTietPhong.price * countDate}</span>
          </div>
          <div className="d-flex justify-content-between  py-3 border-bottom">
            <p>Ph?? d???ch v???</p>{" "}
            <span>${(chiTietPhong.price * countDate) / 20}</span>
          </div>
          <div className="d-flex justify-content-between py-2">
            <p>T???ng</p>{" "}
            <span>${(chiTietPhong.price * countDate * 95) / 100}</span>
          </div>
        </div>
      );
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const confirm = () => {
    Modal.confirm({
      title: "B???n Mu???n ?????t V?? Ch???",
      icon: <ExclamationCircleOutlined />,
      content: (
        <p>T???ng Chi ph?? l??: {(chiTietPhong.price * countDate * 95) / 100}</p>
      ),
      okText: "V??ng",
      onOk() {
        const ve = {
          roomId: props.match.params.id,
          checkIn: moment(value[0]).format(),
          checkOut: moment(value[1]).format(),
        };
        console.log(ve);
        dispatch(DatPhongAction(ve));
      },
      cancelText: "????? Suy Ngh?? L???i",
    });
  };

  return (
    <div className={width >= 1024 ? `container roomDetail` : " roomDetail"}>
      <div className="roomDetail_head">
        <div className="roomDetail_head_tittle pb-3">
          <h1>{chiTietPhong.name}</h1>
          <div
            className={`${
              width <= 1024 ? "" : "d-flex"
            } justify-content-between`}
          >
            <div>
              <div className={`${width <= 768 ? "" : "d-flex"}`}>
                {/* <div className="d-flex">
                  <a
                    href="#rank"
                    className="d-flex text-dark text-decoration-underline"
                  >
                    <StarOutlined /> {locationId?.valueate}
                  </a>
                  <a
                    href="#comment"
                    className="ml-1 text-dark text-decoration-underline"
                  >
                    {dsDanhGia.length === 0
                      ? " "
                      : ` ${dsDanhGia.length} ????nh gi??`}
                  </a>
                </div> */}

                <h5
                  onClick={showModal}
                  className="cursor h_located text-decoration-text-decoration-underline py-3 "
                >
                  {" "}
                  {locationId?.name}, {locationId?.province},{" "}
                  {locationId?.country}
                </h5>
              </div>
            </div>

            <div className="d-flex">
              <button
                className="btn btn-outline-dark"
                style={{ borderRadius: "50%", height: "auto" }}
              >
                <i>
                  <ShareAltOutlined style={{ height: "auto" }} />
                </i>
              </button>

              <button
                className="btn btn-outline-dark mx-1"
                style={{ borderRadius: "50%", height: "auto" }}
              >
                <HeartOutlined />
              </button>
            </div>
          </div>
        </div>
        <div className="roomDetail_head_photos">
          <Image
            src={chiTietPhong?.image}
            className={`img-fluid roomDetail_head_photos_image`}
            alt="photos"
          />
        </div>
      </div>

      <div className="roomDetail_book row">
        <div className={width <= 1024 ? "col-12" : "col-7"}>
          <div className="roomDetail_book_detail">
            <div className="roomDetail_book_detail_head py-3 border-top">
              <h5 className="h_located cursor py-1" onClick={showModal}>
                Ch??? ??? ?????p V?? Ti???n Nghi T???i {locationId?.name},{" "}
                {locationId?.province}, {locationId?.country}
              </h5>
              <p className="text-secondary pt-3">
                {chiTietPhong.guests ? `${chiTietPhong.guests} kh??ch` : ""}{" "}
                {chiTietPhong.bedRoom
                  ? `${chiTietPhong.bedRoom} ph??ng ng???`
                  : ""}{" "}
                {chiTietPhong.bath ? `${chiTietPhong.bath} ph??ng t???m` : ""}
              </p>
            </div>
            <div className="roomDetail_book_detail_mid py-4 border-top border-bottom">
              <div className="d-flex py-2">
                <i className="m-2">
                  <HomeOutlined />
                </i>
                <div>
                  <h6>To??n B??? Nh??</h6>
                  <span>B???n s??? c?? chung c?? cao c???p cho ri??ng m??nh</span>
                </div>
              </div>
              <div className="d-flex py-2">
                <i className="m-2">
                  <SafetyOutlined />
                </i>
                <div>
                  <h6>V??? Sinh T??ng C?????ng</h6>
                  <span>Cam k??t vs s???ch</span>
                </div>
              </div>
              <div className="d-flex py-2">
                <i className="m-2">
                  <TrophyOutlined />
                </i>
                <div>
                  <h6>Phong L?? Ch??? Nh?? Siu c???p</h6>
                  <span>B???n s??? c?? chung c?? cao c???p cho ri??ng m??nh</span>
                </div>
              </div>
              <div className="d-flex py-2">
                <i className="m-2">
                  <CalendarOutlined />
                </i>
                <div>
                  <h6>Mi???n Ph?? H???y Trong 48 Gi???</h6>
                  <span>C?? th??? h???y ????n n???u kh??ng v???a ?? trong 2 ng??y</span>
                </div>
              </div>
            </div>
            <div className="roomDetail_book_detail_bot py-4">
              {chiTietPhong.description}
            </div>
            <div className="roomDetail_book_detail_last py-4 border-top border-bottom">
              <h5 className="mb-2">Ti???n Nghi</h5>
              <div className="row">
                {renderTienNghi(add)}
                <div className="col-12 text-center">
                  {renderTienNghi(add).length >= add ? (
                    <button
                      onClick={() => {
                        setAdd(10);
                      }}
                      className="custom-btn btn_Add"
                    >
                      Hi???n Th??? T???t C??? Ti???n ??ch
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={width <= 1024 ? "col-12" : "col-5"}>
          <div className={"roomDetail_book_booking bg-white py-4"}>
            <Form
              className="m-auto form_book"
              layout="vertical"
              size={width <= 400 ? "small" : width <= 800 ? "default" : "large"}
            >
              <div className=" d-flex justify-content-between">
                <span>
                  <span>${chiTietPhong.price}</span> / ????m
                </span>
                <div className="d-flex">
                  <StarOutlined style={{ color: "pink" }} />{" "}
                  <span style={{ color: "black" }}>
                    {locationId?.valueate}{" "}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Form.Item>
                    <h5 className="w-100 text-center p-2">
                      Ng??y ?????n V?? Ng??y ??i
                    </h5>
                    <RangePicker
                      value={hackValue || value}
                      format="YYYY-MM-DD"
                      disabledDate={disableDate}
                      onCalendarChange={(val) => setDates(val)}
                      onChange={(val) => setValue(val)}
                      onOpenChange={onOpenChange}
                    />
                    {/* <RangePicker
                      format="YYYY-MM-DD"
                      disabledDate={disableDateRanges({
                        endDate: checkOut,
                        startDate: checkIn,
                      })}
                    /> */}
                  </Form.Item>
                  <Form.Item label="B???n ??i Bao Nhi??u Ng?????i">
                    <Select onChange={(a) => {}} defaultValue={{ value: "1" }}>
                      <Select.Option value="1">1 Ng?????i</Select.Option>
                      <Select.Option value="2">2 Ng?????i</Select.Option>
                      <Select.Option value="3">3 Ng?????i</Select.Option>
                      <Select.Option value="4">4 Ng?????i</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="col-12 text-center py-2">
                  <Button
                    onClick={() => {
                      if (value?.length === 2) confirm();
                      else alert("Ch??a Ch???n Ng??y");
                    }}
                    className="w-100 btn_submit"
                  >
                    Submit
                  </Button>
                </div>
                {renderReducer()}
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="roomdetail_map">
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{
                height: `90vh`,
                margin: `auto`,
                border: "2px solid black",
              }}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
      <div className="roomDetail_reviews py-4">
        <div className="roomDetail_reviews_rank" id="rank">
          <div className="d-flex">
            <Icon style={{ color: "hotpink" }} component={HeartOutlined} />{" "}
            <h4>
              {locationId?.valueate}{" "}
              {dsDanhGia.length === 0 ? "" : ` ${dsDanhGia.length} ????nh gi??`}
            </h4>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="d-flex justify-content-between">
                <span>M???c ????? S???ch S???</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Li??n L???c</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Nh???n Ph??ng</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-between">
                <span>M???c ????? Ch??nh X??c</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>V??? Tr??</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
              <div className="d-flex justify-content-between">
                <span>Gi?? Tr???</span>
                <Progress
                  className="w-75"
                  strokeColor={{
                    from: "#E233FF",
                    to: "#FF6B00",
                  }}
                  percent={`${locationId?.valueate}0`}
                  status="active"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="roomDetail_reviews_comment py-4" id="comment">
          <div className="row">
            {dsDanhGia?.length !== 0 ? (
              renderDanhGia(more)
            ) : (
              <span className="col-12 py-3 text-center text-success">
                Hi???n T???i Ch??a C?? ????nh Gi??
              </span>
            )}
          </div>
          {dsDanhGia?.length !== 0 && dsDanhGia.length > more ? (
            <button
              onClick={() => {
                setMore(more + 6);
              }}
              className="custom-btn btn_Add"
            >
              Hi???n Th??? Th??m ????nh Gi??
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <Modal
        title={`${locationId?.name}, ${locationId?.province}, ${locationId?.country}`}
        width="80%"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Wellcome"
        cancelText={<i className="fab fa-angellist"></i>}
      >
        <Image
          src={locationId?.image}
          className={`img-fluid`}
          style={{ height: "100%", width: "100vw" }}
          alt="photos vitri"
        />
      </Modal>
    </div>
  );
}
