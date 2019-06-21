import React from 'react';
import styled from 'styled-components';
// import FullPageProduct from '../FullPageProduct/FullPageProduct';
import { NavLink} from "react-router-dom";


class productItem extends React.Component{
    render(){
    const Figure = styled.figure`
        display:flex;
        flex-direction : column;
        box-shadow: 0 4px 10px -2px #eee;
        padding:10px;
        width: 23%;
        margin:  1%;
    `;
    const ImageContainer = styled.div`
        position: relative;
        background-color: white;
        width: 100%;
        border: 1px solid rgb(255,127,80);
        box-shadow: 0 4px 3px -3px #ccc;
        &:before {
            content: '';
            display: block;
            padding: 50%;
        }
    `;
    const imageStyle ={
        position: 'absolute',
        margin: 'auto',
        width: "70%",
        top: 0,
        bottom: 0,
        left:0,
        right: 0  
    }
    const ImageInfo = styled.figcaption`

    `;
    const Title = styled.h2`

    `;
    const ItemInfo = styled.p`
        overflow: hidden;
        text-overflow : ellipsis;
        display: -webkit-box;
        line-height: 17px;
        max-height: 34px;
        -webkit-line-clamp: 2;
        /* autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
    `;
    const Price = styled.p`
        font-weight: 400;
        font-size:20px;
    `;
    const Button = styled.button`
        border: 0;
        background-color: rgb(255,127,80);
        text-decoration: none;
        padding:10px;
        color: white;
        &:hover{
            background-color: rgb(194, 99, 65);
        }
    `;
    const NavLinkBtn = styled(NavLink)`
        border: 0;
        background-color: rgb(255,127,80);
        text-decoration: none;
        padding:10px;
        color: white;
        &:hover{
            background-color: rgb(194, 99, 65);
        }
    `;
    const SpreaterBtn = styled.div`
        display: flex;
        justify-content: space-between;
    `;
    return(
        <>
        <Figure>
            <ImageContainer >
                <img style={imageStyle} src={require(`../../../assets/img/${this.props.product.img}`)} alt="random "/>
            </ImageContainer>
            <ImageInfo>
                <div>
                    <Title>{this.props.product.title}</Title>
                    <ItemInfo>{this.props.product.info}</ItemInfo>
                </div>
                <Price>{this.props.product.price} Euro</Price>
                
            </ImageInfo>
            <SpreaterBtn>
                <Button onClick={this.props.getOrderHandler}>Add to Card</Button>
                <NavLinkBtn to={{
                    pathname:`/Product/${this.props.product.category}/${this.props.product.id}`,
                    state: this.props.product,
                    getOrderHandler : this.props.getOrderHandler
                    }} >View</NavLinkBtn>
            </SpreaterBtn>
        </Figure>

        </>
    );
}
}

export default productItem;