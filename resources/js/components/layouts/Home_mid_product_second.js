import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Home_mid_product_single from './home/Home_mid_product_single'
class Home_mid_product_second extends Component{
	render(){
		return (
			<div className="fix nine_by_ten bg_white div_mid">
				{this.props.allState.products.map(( product, index ) => (
					<Home_mid_product_single
					productImage={product.images[0].image_name} 
					productName={product.name} 
					key={index}
					productFeatures={product.short_features}
					productColors={product.colors}
					product={product}
					/>
				))}
			</div>
		)
	}
}

export default Home_mid_product_second