import React, { Component } from 'react'
import { constructorStyle, didmountStyle, didupdateStyle, unmountingStyle } from './Index';
interface Iprops{}
interface Istate{
  products:[]
}
export default class Product extends Component<Iprops,Istate> {
  constructor(props:Iprops){
    super(props);
    this.state={
      products:[]
    }
    console.log("%cconstructor",constructorStyle); 
  }

  componentDidMount(): void {
    console.log("%ccomponentDidMount",didmountStyle);
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data=>{this.setState({products:data.products})});
  }

  componentDidUpdate(): void {
    console.log("%ccomponentDidUpdate",didupdateStyle);
    
  }

  componentWillUnmount(): void {
    console.log("%ccomponentWillUnmount",unmountingStyle); 
  }

  render() {
    return (
      <div className="">
        {this.state.products.map((product:{title:string,id:number},index)=>(
           <h3 key={index}>{product.id} {product.title}</h3>
        ))}
      </div>

    )
  }
}
