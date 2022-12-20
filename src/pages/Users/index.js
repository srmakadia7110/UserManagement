import React from "react";
import logo from "../../assets/images/logo.svg";
import RegisterUser from "../../container/RegisterUser";
import { Link } from "react-router-dom";
import Users from "../../container/Users";
import Cookies from "js-cookie";

const UsersPage = (props) => {
  
  return (
    <>
      <Users />
    </>
  );
};

export default UsersPage;