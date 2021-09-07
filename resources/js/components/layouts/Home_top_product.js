import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home_top_product_single from './home/Home_top_product_single'
class Home_top_product extends Component{
	constructor(props){
		super(props)
	}
	render(){
		console.log(this.props.allState.sub_categories)
		return (
			<div className="fix nine_by_ten bg_white div_mid">
				{
					this.props.allState.sub_categories.map( (sub_category, index ) => (
						<Home_top_product_single 
						productImage={sub_category.image} 
						productName={sub_category.name} 
						productUrl={sub_category.url}
						key={index}/>
					))
				}			
			</div>
		)
	}
}

export default Home_top_product