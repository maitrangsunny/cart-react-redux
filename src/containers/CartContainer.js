import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';
import products from '../reducers/products';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as types from '../constants/Message';

class CartContainer extends Component {

	showCartItem = (cart) => {
		var result = types.MSG_CART_EMPTY;
		if(cart.length > 0) {
			result = cart.map((item,index)=> {
				return(
					<CartItem key={index} item = {item}/>
				)
			})
		}
		return result;
	}

	showTotal = (cart) => {
		var result = null;
		if(cart.length > 0) {
			result = <CartResult cart = {cart}/>
		}
		return result;

	}
    
    render() {
		var { cart } =  this.props;
		console.log(cart);
		return (
			<Cart>
				{ this.showCartItem(cart) }
				{ this.showTotal(cart) }
				
			</Cart>
		)
    }
}

CartContainer.propTypes = {
	cart : PropTypes.arrayOf(
		PropTypes.shape({
			product : PropTypes.shape({
				id :  PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				image: PropTypes.string.isRequired,
				desc: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				inventory: PropTypes.number.isRequired,
				rating: PropTypes.number.isRequired
			}),
			quantity : PropTypes.number.isRequired
		})
	).isRequired
}

const mapStateToProps = (state) => {
	return {
		cart : state.cart
	}
}
  
export default connect(mapStateToProps,null)(CartContainer);