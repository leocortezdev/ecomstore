import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  padding: 20px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const MenuOption = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Navbar = () => {
  return (
    <Router forceRefresh={true}>
      <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>
              <Link className="navbar-link" to="/">
                LeocK.
              </Link>
            </Logo>
          </Center>
          <Right>
            <MenuOption>
              <Link className="navbar-link" to="/register">
                Register
              </Link>
            </MenuOption>
            <MenuOption>              <Link className="navbar-link" to="/login">
                Login
              </Link></MenuOption>
            <MenuOption>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuOption>
          </Right>
        </Wrapper>
      </Container>
      </Router>
  );
};

export default Navbar;
