import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>AWESOME 30% off Deal order now asap!</Container>;
};

export default Announcement;
