import React from 'react';
import Order from './Order/Order';


const orderCard = props =>{
    return(
        <section>
            <h2>Order</h2>
            <hr/>
            {props.order.map(item => <Order 
                key={item.id} 
                incDecProductCard={props.incDecProductCard} 
                removeFromCard={props.removeFromCard}
                product={item} />)}
            <hr />
            <div> total price: ${props.totalPrice}</div>

        </section>
    );
};


export default orderCard;