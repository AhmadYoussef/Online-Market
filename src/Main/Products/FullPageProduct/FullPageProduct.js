import  React from 'react';
import styled from 'styled-components';


const fullPageProduct = (props)=>{
    const BlackBackground = styled.div`
        background-color: rgba(0,0,0,0.7);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:100;
    `; 
    const ProductContainer = styled.div`
        position: fixed;
        background-color: #fff;
        width: 70%;
        max-height:90%;
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        margin: auto;
        z-index: 101;
    `;
        const Figure = styled.figure`
        display:flex;
        flex-wrap:wrap;
        flex-direction: column;
        justify-content:center;
        height:100%;
        margin:0;
    `;
    const ImageContainer = styled.div`
        position: relative;
        background-color: white;
        margin: 0 auto;
        width: 45%;
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
        padding:10px;
        color: white;    
        float: right;
        margin-right: 40px;
        &:hover{
            background-color: rgb(194, 99, 65);
        }

    `;

    return(
        <>
        <ProductContainer>
            <Figure>
                <ImageContainer >
                    <img style={imageStyle} src={require(`../../../assets/img/${props.product.img}`)} alt="random "/>
                </ImageContainer>
                <ImageInfo>
                    <div>
                        <Title>props.product.title</Title>
                        <ItemInfo>props.product.info</ItemInfo>
                    </div>
                    <Price>props.product.price Euro</Price>
                    
                    {/* <Button onClick={props.getOrderHandler}>Add to Card</Button> */}
                </ImageInfo>
                </Figure>
        </ProductContainer>
        {/* <BlackBackground onClick={props.closeProductPage} /> */}
        </>
    );
}

export default fullPageProduct;