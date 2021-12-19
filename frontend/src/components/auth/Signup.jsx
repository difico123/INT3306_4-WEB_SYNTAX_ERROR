import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AuthService from "../../service/authService";
import {
  LockIcon,
  PersonIcon,
  EmailIcon,
  LocationCityIcon,
  HomeIcon,
  LocalPhoneIcon,
} from "../common/icons";

function SignUpForm() {
  const [userReg, setUserReg] = useState({
    email: "",
    lastName: "",
    firstName: "",
    phoneNumber: "",
    city: "",
    address: "",
    password: "",
  });

  const { email, lastName, firstName, phoneNumber, city, address, password } =
    userReg;

  const [message, setMessage] = useState([]);
  var [successMsg, setSuccessMsg] = useState("");
  var [isError, setIsError] = useState(false);

  const onChange = (e) =>
    setUserReg({ ...userReg, [e.target.name]: e.target.value });

  const register = () => {
    AuthService.register(userReg)
      .then((response) => {
        setSuccessMsg(response.msg[0]);
        setIsError(response.error);
        console.log(response);
      })
      .catch((error) => {
        setIsError(error.response.data.error);
        setMessage(error.response.data.msg);
      });
  };

  const errors = message.map((abc, index) => (
    <div key={index}>
      <label className="text-red-300">{abc}</label>
    </div>
  ));
  const success = <div className="text-green-400">{successMsg}</div>;

  return (
    <Wrap>
      <Container>
        <Title>Gia nhập với chúng tôi!</Title>

        <Form autocomplete="off">
          <Field>
            <MailIcon className="Icon"></MailIcon>
            <input
              value={email}
              type="email"
              placeholder="Địa chỉ Email..."
              name="email"
              onChange={onChange}
            ></input>
            <div></div>
          </Field>

          <Field>
            <UserIcon className="Icon"></UserIcon>
            <input
              value={lastName}
              type="text"
              placeholder="Họ..."
              name="lastName"
              onChange={onChange}
            ></input>
          </Field>

          <Field>
            <UserIcon className="Icon"></UserIcon>
            <input
              value={firstName}
              type="text"
              placeholder="Tên..."
              name="firstName"
              onChange={onChange}
            ></input>
          </Field>

          <Field>
            <PhoneIcon className="Icon"></PhoneIcon>
            <input
              value={phoneNumber}
              type="number"
              placeholder="Số điện thoại..."
              name="phoneNumber"
              onChange={onChange}
            ></input>
          </Field>

          <Field>
            <CityIcon className="Icon"></CityIcon>
            <input
              value={city}
              type="text"
              placeholder="Thành phố"
              name="city"
              onChange={onChange}
            ></input>
          </Field>

          <Field>
            <AddressIcon className="Icon"></AddressIcon>
            <input
              value={address}
              type="text"
              placeholder="Địa chỉ"
              name="address"
              onChange={onChange}
            ></input>
          </Field>

          <Field>
            <PasswordIcon className="Icon"></PasswordIcon>
            <input
              value={password}
              type="password"
              placeholder="Mật khẩu..."
              name="password"
              onChange={onChange}
            ></input>
          </Field>
          {isError ? errors : success}
          <SubmitButton onClick={register}>Đăng kí tài khoản</SubmitButton>
        </Form>
        <RedirectLogIn>
          Đã có tài khoản?
          <Link to="/auth/login">
            <span> Đăng nhập</span>
          </Link>
        </RedirectLogIn>
      </Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-height: calc(100vh - 94px);
  padding: 5vh 25vw;
  background-image: url("https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-english-winter-vacation-training-background-image_186800.jpg");
  background-repeat: no-repeat;
  background-size:100vw 90vh ;
`;

const Container = styled.div`
  width: 100%;
  padding: 5vh 3vw;
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  background-size: cover;
  gap: 2.5vh;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border-radius: 18px;
  background-color:white;
`;

const Title = styled.div`
  font-weight: bold;
  width: 100%;
  font-size: 1.25rem;
  font-weight: bold;
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  border-bottom: 1px solid #878787;
  padding-bottom: 4vh;
`;

const Form = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: flex-start;
  textarea:focus,
  input:focus {
    outline: none;
  }
`;

const Field = styled.div`
  border: 0.5px solid black;
  margin-bottom: 10px;
  gap: 5px;
  min-width: 350px;
  height: 40px;
  display: flex;
  input {
    border: none;
    width: 100%;
    autocomplete: off;
    background-image: none;
    font-size: 15px;
    font-weight: lighter;
    background-color: transparent;
    textarea:focus,
    color: black;
    input:focus {
      outline: none;
    }
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input::-webkit-input-placeholder {
    color: black;
    font-weight: 400;
  }
  .Icon {
    margin: 7px 5px 7px;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  height: 40px;
  font-weight: bold;
  color: white;
  transition: 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    border: transparent;
    color: white;
    background-color: #04aa6d;
  }
`;

const RedirectLogIn = styled.div`
  text-align: center;
  padding: 15px 0;
  font-size: 16px;
  color: #4caf50;
  span {
    font-weight: bold;
    color: #4caf50;
    cursor: pointer;
  }
  span:hover {
    color: #04aa6d;
  }
`;

const UserIcon = styled(PersonIcon)``;
const PasswordIcon = styled(LockIcon)``;
const MailIcon = styled(EmailIcon)``;
const CityIcon = styled(LocationCityIcon)``;
const AddressIcon = styled(HomeIcon)``;
const PhoneIcon = styled(LocalPhoneIcon)``;

export default SignUpForm;