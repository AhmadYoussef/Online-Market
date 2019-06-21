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
    `;
    const DecIncBtn = styled.button`
        padding: 16px;
        margin: 0 20px;
    `;
    const OrderCount = styled.p`
        margin: 0;

    `;
    const DeleteBtn = styled.button`

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
                    del
                </DeleteBtn>
                <div>{props.product.totalPrice} euro</div>
            </ImgInfo>

        </Order>
    );
}

export default order;