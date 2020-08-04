// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart.component";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoLinkContainer to="/">
        <Logo />
      </LogoLinkContainer>
      <Options>
        <OptionLinkContainer to="/shop">SHOP</OptionLinkContainer>
        <OptionLinkContainer to="/contact">CONTACT</OptionLinkContainer>
        {currentUser ? (
          <OptionLinkContainer onClick={() => auth.signOut()} to="/signin">
            SIGN OUT
          </OptionLinkContainer>
        ) : (
          <OptionLinkContainer to="/signin">SIGN IN</OptionLinkContainer>
        )}
        <CartIcon />
      </Options>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoLinkContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  text-decoration: none;
  color: black;
`;

const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionLinkContainer = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  color: black;
`;
