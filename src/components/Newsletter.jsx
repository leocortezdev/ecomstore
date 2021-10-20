import React from "react";
import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.div`
  font-size: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1pxs solid lightgray;
`;
const Button = styled.button``;
const Input = styled.input`
  border: none;
  flex: 1;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>
        Wanna be up to date with your favorite products?
      </Description>
      <InputContainer>
        <Input placeholder="Enter your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
