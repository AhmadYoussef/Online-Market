import React from 'react';
import styled from 'styled-components';


const order = props => {
    const Order = styled.figure`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        margin: 10px 0;
    `;
    const ImgContainer = styled.div`
        position:relative;
        background-color: white;
        width: 12%;
        box-shadow: 0 4px 3px -2px #ccc;
        &:before{
            padding: 50%;
            display: block;
            content: '';
        }
    `;
    const imageStyle ={
        position: 'absolute',
        margin: 'auto',
        width: "100%",
        top: 0,
        bottom: 0,
        left:0,
        right: 0  
    }
    const ImgInfo = styled.figcaption`
        display: flex;
        width:50%;
        justify-content: space-around;
        align-items:center;
    `;
    const DecInc = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:black;
    `;
    const DecIncBtn = styled.button`
        padding:16px 19px;
        border: 0;
        background-color: rgb(255,127,80);
        text-decoration: none;
        color: white;
        cursor: pointer;
        &:hover{
            background-color: rgb(194, 99, 65);
        }
    `;
    const OrderCount = styled.p`
        margin: 0;
        padding: 0 19px;
        color:white;
        font-size: 1.1rem;
    `;
    const DeleteBtn = styled.div`
        width: 33px;
        cursor: pointer;
    `;
    console.log(props);
    return(
        <Order>
            <ImgContainer>
                <img style={imageStyle} src={require(`../../../assets/img/${props.product.img}`)} alt="random" />
            </ImgContainer>
            <ImgInfo>
                <DecInc>
                    <DecIncBtn value="+1" onClick={(e)=>props.incDecProductCard(props.product,e)}>+</DecIncBtn>
                    <OrderCount>{props.product.count}</OrderCount>
                    <DecIncBtn value="-1" onClick={(e)=>props.incDecProductCard(props.product,e)}>-</DecIncBtn>
                </DecInc>
                <DeleteBtn onClick={()=>props.removeFromCard(props.product)}>
                    <img style={{width:"100%"}} src={require('./trash.svg')} alt="delete" />
                </DeleteBtn>
                <div>{props.product.totalPrice} euro</div>
            </ImgInfo>

        </Order>
    );
}

export default order;