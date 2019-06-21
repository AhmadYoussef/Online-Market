import  React from 'react';
import { NavLink} from "react-router-dom";
import styled from 'styled-components';


const fullPageProduct = (props)=>{
    console.log(props);
    let product = {...props.location.state};
    

    const ProductContainer = styled.div`
        background-color: #fff;
        width: 70%;
        margin: 3% auto;
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
    const NavLinkBtn = styled(NavLink)`
    border: 0;
    background-color: rgb(255,127,80);
    text-decoration: none;
    display:inline-block;
    padding:10px;
    margin: 20px 0;
    color: white;
    &:hover{
        background-color: rgb(194, 99, 65);
    }
`;
    return(
        <ProductContainer>
            <NavLinkBtn to={`/Product/${props.match.params.type}`}>Back</NavLinkBtn>
            <Figure>
                <ImageContainer >
                    <img style={imageStyle} src={require(`../../../assets/img/${product.img}`)} alt="random "/>
                </ImageContainer>
                <ImageInfo>
                    <div>
                        <Title>{product.title}</Title>
                        <ItemInfo>{product.info}</ItemInfo>
                    </div>
                    <Price>{product.price} Euro</Price>
                    
                    <Button onClick={props.location.getOrderHandler}>Add to Card</Button>
                </ImageInfo>
                </Figure>
        </ProductContainer>
    );
}

export default fullPageProduct;