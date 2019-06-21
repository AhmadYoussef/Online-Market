import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Products from './Main/Products/Products';
import Home from './Main/Home/Home';
import OrderCard from './Main/OrderCard/OrderCard';
import FullPageProduct from "./Main/Products/FullPageProduct/FullPageProduct";

class App extends React.Component {
  state={
    card : [],
    totalPrice: 0,
    totalItem: 0
  }
  addProduct = (newProduct)=>{
    let card = [...this.state.card];
    let index = card.findIndex((item)=> item.id === newProduct.id);
    if(index === -1){
      newProduct.count++;
      newProduct.totalPrice += newProduct.price;
      card= [...card, newProduct];
    }else{
      card[index].count += 1;
      card[index].totalPrice += card[index].price;
    }
    this.setState({card: card},()=> {
                    this.calcTotalPrice();
                    this.calcTotalItem();
                  });

  }
  incDecProductCard = (newProduct,e) =>{
    
    let card = [...this.state.card];
    let index = card.findIndex((item)=> item.id === newProduct.id);
    if(e.target.value === '+1'){
      card[index].count++;
      card[index].totalPrice += newProduct.price;
    }
    if(e.target.value === '-1'){
      card[index].count--;
      card[index].totalPrice -= newProduct.price;
    }
    if(card[index].count < +1){
      card.splice(index,1);
    }
    this.setState({card: card},()=> {
      this.calcTotalPrice();
      this.calcTotalItem();
    });

  }
  removeFromCard = (newProduct)=>{
    let card = [...this.state.card];
    let index = card.findIndex((item)=> item.id === newProduct.id);
    if(index !== -1){
      card.splice(index,1);
      this.setState({card: card},()=> {
        this.calcTotalPrice();
        this.calcTotalItem();
      });
    }
  }
  calcTotalItem = () =>{
    let totalItem = 0;
    this.state.card.map(item => totalItem = totalItem + item.count)
    this.setState({totalItem}, ()=> console.log(this.state.totalItem))    
    
  }
  calcTotalPrice = () =>{
    let totalPrice = 0;

    this.state.card.map(item => totalPrice = totalPrice + item.totalPrice)
    this.setState({totalPrice}, ()=> console.log(this.state.totalPrice))    
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar totalItem={this.state.totalItem} />
          <Switch>
            <Route exact path="/" render={Home}/>
            <Route exact path="/Product/:type" render={(props)=>
              <Products 
              addHandler={this.addProduct} 
              {...props} />} />
            <Route  path="/Product/:type/:id" Component={FullPageProduct} />
            <Route path="/Order" render={()=>
              <OrderCard 
              order={this.state.card} 
              incDecProductCard={this.incDecProductCard} 
              removeFromCard={this.removeFromCard}
              totalPrice={this.state.totalPrice} />} />
            <Route render ={()=> <h2>Not Found</h2>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
