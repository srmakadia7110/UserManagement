import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import regiterUser from "../../redux/actions/Registration";
import { Button, Checkbox, Form, Input, notification } from "antd";

const RegisterUser = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { loginLoading } = useSelector((state) => {
    return state.login;
  });

  const onFinish = (values) => {
    dispatch(regiterUser(values));
  };
  return (
    <>
    <Header />
        <div className='container'>
            <div className="row form-wrap"> 
                <div className="col-12 col-md-6 form">
                    <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    >
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
                        </Form.Item>

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

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" loading={loginLoading}>
                            Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    <Footer />
    </>
  );
};

export default RegisterUser;
