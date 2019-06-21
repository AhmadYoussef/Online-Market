import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem/ProductItem';
import {data} from "../../assets/data";

const products = props =>{
    console.log(props)
    let products = data.filter((data) => data.category === props.match.params.type);

    const getOrderHandler = (orderID)=>{
       let index = products.findIndex((item)=> orderID === item.id);
       if(index !== -1){
            let  productItem = {...products[index]}
            props.addHandler(productItem);
       }
    }
    const Main = styled.main`
        margin-top : 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    `;
    return(
        <Main> 
            {products.map(item => 
                <ProductItem 
                    key={item.id} 
                    product={item}
                    getOrderHandler={()=>getOrderHandler(item.id)}/>
                    )}
        </Main>
    );
}


export default products;