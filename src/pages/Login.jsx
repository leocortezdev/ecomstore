import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const LoginLink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <>
      <Router forceRefresh={true}>
        <Navbar />
        <Container>
          <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
              <Input placeholder="username" />
              <Input placeholder="password" />
              <Button>LOGIN</Button>
              <LoginLink>Forgot Password?</LoginLink>
              <LoginLink>
                <Link className="navbar-link" to="/register">
                  New? Create Account
                </Link>
              </LoginLink>
            </Form>
          </Wrapper>
        </Container>
      </Router>
    </>
  );
};

export default Login;
