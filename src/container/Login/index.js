import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import getUsers from "../../redux/actions/Login";
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input, notification, Row, Col } from "antd";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { loginLoading , loginData} = useSelector((state) => {
    return state.login;
  });
  console.log(loginData)
  const onFinish = (values) => {
    dispatch(getUsers(values));
  };
  useEffect(() => {
    if(loginData && loginData.success == false){
      notification["error"]({
        message: loginData.message
      });
    }
    if(loginData && loginData.success == true){
      navigate('/users');
    }
  },[loginData])
  return (
    <>
      <Header />
      
    <div className='container'>
      <div className="row form-wrap"> 
      <div className="col-12 col-md-6 form">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
      <Row className="pb-5">
       <Col span={24}>
        <h1>Login User</h1>
        </Col>
        
        </Row>
        
         <Row>
          <Col span={24}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input />
        </Form.Item></Col>
</Row>
           <Row>
          <Col span={24}>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        </Col>
        </Row>
           <Row>
          <Col span={24}>
            if you don't have account then <Link to="register">register now</Link>
            </Col>
          </Row>
          
           <Row className="pt-3">
          <Col span={24}>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loginLoading}>
            Submit
          </Button>
        </Form.Item>
        </Col>
        </Row>
      </Form>
      </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
