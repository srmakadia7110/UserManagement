import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import getUsers from "../../redux/actions/Login";
import { Button, Checkbox, Form, Input, notification, Row, Col } from "antd";

const Login = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { loginLoading } = useSelector((state) => {
    return state.login;
  });

  const onFinish = (values) => {
    dispatch(getUsers(values));
  };
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
        
         <Row>
          <Col span={24}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
          
           <Row>
          <Col span={24}>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
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
