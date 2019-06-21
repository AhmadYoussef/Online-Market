import React from 'react';
import Order from './Order/Order';
import styled from 'styled-components';


const orderCard = props =>{
    const BasketContainer = styled.section`
            width: 90%;
            margin: 4% auto;
    `;
    const NoOrder = styled.h3`
        font-size: 2rem;
        text-align: center;
        margin-top: 20%;
    `;
    const TitleH = styled.h2`
        font-size: 2rem;
        text-align: center;
    `;
    const TotalPrice = styled.p`
        font-size: 1.2rem;
        margin: 3%;
    `;
    let OrderCard = <NoOrder>The basket is empty</NoOrder>
    if(props.order.length !== 0){
        OrderCard =   <>
                        <TitleH>Order</TitleH>
                        <hr/>
                        {props.order.map(item => <Order 
                            key={item.id} 
                            incDecProductCard={props.incDecProductCard} 
                            removeFromCard={props.removeFromCard}
                            product={item} />)}
                        <hr />
                        <TotalPrice> Total price: {props.totalPrice} EUR</TotalPrice>
                    </>
                 
    }
    return(
        <BasketContainer>
            {OrderCard}
        </BasketContainer>
    );
};


export default orderCard;