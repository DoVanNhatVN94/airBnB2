import React, { Fragment, useEffect } from 'react'
import { Table, Button, Input, Tag, Space } from 'antd';
import { DeleteOutlined, SearchOutlined, EditOutlined, CalendarOutlined } from '@ant-design/icons';
import { history } from '../../../App';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachNguoiDungAction } from '../../../redux/Actions/NguoiDungAction';
import { NavLink } from 'react-router-dom';

const { Search } = Input;

export default function User() {
    let { mangNguoiDung } = useSelector(state => state.nguoiDungReducer)
    console.log(mangNguoiDung);

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction())
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (text, user) => {
                return <Fragment>
                    <img src={user.avatar} alt={user.name} width={50} height={50} onError={(e) => { e.target.onError = null; e.target.src = 'https://i.pravatar.cc/50' }} />
                </Fragment>
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render:(text, user) => {
                return <Fragment>
                    <NavLink key={1} to={`/admin/user/edit/${user._id}`} style={{ color: 'blue', fontSize: 25, paddingRight: 10 }}><EditOutlined /></NavLink>
                </Fragment>
            }
        },
    ];

    const data = mangNguoiDung;

    const onSearch = () => {

    }

    function onChange(pagination, filters, sorter, extra) {
        console.log("params", pagination, filters, sorter, extra);
    }

    return (
        <div className="dashboard-content">
            <h2>Admin/User</h2>
            <Button type='primary' style={{ width: 150 }} className='mb-4' onClick={() => {
                // history.push('/admin/films/addnew')
            }}>Add new</Button>
            <Search
                className='mb-4'
                placeholder="Search"
                enterButton={<SearchOutlined />}
                size="large"
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={'_id'} />
        </div>
    )
}
