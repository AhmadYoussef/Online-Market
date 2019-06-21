import React from 'react';
import styled from 'styled-components';
import { NavLink} from "react-router-dom";

const navBar = props =>{
    const Nav = styled.nav`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        padding: 0 100px;
    `;
    const Logo = styled.div`
        color: white;
        padding: 10px 10px;
        font-size: 30px;
        font-weight: 700;
    `;
    const CategoryList = styled.ul`
        color: white;
        list-style: none;
        display: flex;

    `;
    const CatItem = styled.li`
        padding : 10px 30px;
    `;
    const OrderBasket = styled.div`
        color: white;
        background-color: rgb(255,127,80);
        padding: 10px;
        border-radius: 10px;
    `;
    const StyledNavLink = styled(NavLink)`
        color: white;
        text-decoration: none;

    `
  return (
    <Nav>
         <StyledNavLink to="/"><Logo>Best Market</Logo></StyledNavLink>
        <CategoryList>
            <StyledNavLink to="/Product/Handy"><CatItem>Mobile</CatItem></StyledNavLink>
            <StyledNavLink to='/Product/Tablet'><CatItem>Tablet</CatItem></StyledNavLink>
            <StyledNavLink to='/Product/Laptop'><CatItem>Laptop</CatItem></StyledNavLink>
        </CategoryList>
        <StyledNavLink to='/Order'><OrderBasket>Order {props.totalItem}</OrderBasket></StyledNavLink>
    </Nav>
  );
}

export default navBar;
