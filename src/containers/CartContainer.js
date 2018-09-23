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
import * as actions from '../actions/index';

class CartContainer extends Component {

	showCartItem = (cart) => {
		var result = <tr><td>{types.MSG_CART_EMPTY}</td></tr>
		if(cart.length > 0) {
			result = cart.map((item,index)=> {
				return(
					<CartItem key={index} 
								item = {item} 
								onRemoveItem = {this.props.onRemoveItem} 
								onChangeMessage = { this.props.onChangeMessage }
								onUpdateQuantity = { this.props.onUpdateQuantity }/>
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
	).isRequired,
	onRemoveItem : PropTypes.func.isRequired,
	onChangeMessage : PropTypes.func.isRequired,
	onUpdateQuantity: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		cart : state.cart
	}
}

const mapDispatchToProps = (dispatch,props) => {
	return {
		onRemoveItem : (product) => {
			dispatch(actions.RemoveProductInCart(product));
		},
		onChangeMessage : (message) => {
			dispatch(actions.ChangeMessage(message))
		},
		onUpdateQuantity : (product, quantity) => {
			dispatch(actions.UpdateProductInCart(product,quantity))
		}
	}
}
  
export default connect(mapStateToProps,mapDispatchToProps)(CartContainer);