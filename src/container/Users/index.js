import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import getUserList from "../../redux/actions/Users";
import { Button, Checkbox, Form, Input, notification, Row, Col,Table } from "antd";
import { Link } from "react-router-dom";
import PaginationComponent from "../../component/Pagination";

const Users = (props) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(2);
  const [search, setSearch] = useState("");
  const { userListError,
    userListSuccess,
    userListLoading,
    userListData } = useSelector((state) => {
    return state.users;
  });
  
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone_no',
      key: 'phone_no',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
  ];
  
  useEffect(() => {
    dispatch(getUserList(page,size,search));
  },[page,search])

  console.log(userListData);
  return (
    <>
    <Header />
         
    <div className='container'>
      <div className="row form-wrap"> 
        <div className="col-12 col-md-8 form">
            <h1 className="mb-5">User List</h1>
            <div className="">
                <Input placeholder="Search User" onChange={(e) => setSearch(e.target.value)}/>
            </div>
        {userListData && userListData.data && <Table dataSource={userListData.data} columns={columns} loading={userListLoading} pagination={false}/>}
        
        <div className="">
            <PaginationComponent 
                totalPage={userListData.total_page}
                onPageChange={setPage}
                current={page}
                pageSize={size} 
            />
        </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Users;
