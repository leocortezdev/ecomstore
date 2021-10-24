import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "./../components/Newsletter";
import Footer from "./../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1``;
const Desc = styled.p``;
const Price = styled.span``;

const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est
            dignissimos qui nesciunt amet assumenda commodi doloribus aspernatur
            ut harum repellat praesentium rerum at a, quidem corrupti? Ex, sed?
            Natus.
          </Desc>
          <Price>$19.99</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
