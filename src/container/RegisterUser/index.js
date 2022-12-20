import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import regiterUser from "../../redux/actions/Registration";
import { Button, Checkbox, Form, Input, notification, Row, Col } from "antd";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const RegisterUser = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { registerError,
    registerSuccess,
    registerLoading,
    registerData } = useSelector((state) => {
    return state.registration;
  });

  const onFinish = (values) => {
    dispatch(regiterUser(values));
  };

  useEffect(() => {
    if(registerData && registerData.success == false){
      notification["error"]({
        message: registerData.message
      });
    }
    if(registerData && registerData.success == true){
      navigate('/');
    }
  },[registerData])

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
                        label="First Name"
                        name="first_name"
                        rules={[
                            {
                            required: true,
                            message: "Please input your First Name",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <Form.Item
                        label="Last Name"
                        name="last_name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Last Name",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item
                        label="Phone no"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Phone NO",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: "Please input your Age",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                type:"email",
                                required: true,
                                message: "Please input your Email",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
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
                    if you have account then <Link to="/">Login now</Link>
                </Col>
            </Row>

            <Row className="pt-3">
                <Col span={24}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={registerLoading}>
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

export default RegisterUser;
