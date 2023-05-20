import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {plural} from "../../utils";

function Controls({cart, handleModal, totalPrice}) {
  const cartItems = Object.values(cart)

  const totalCount = cartItems ?

    cartItems.reduce((acc, cur) => {
      return acc + cur.length
    }, 0) : 0


  return (
    <div className='Controls'>
      <p> В корзине: </p>
      <span className='Controls-info'>
            {totalCount > 0
              ? ` ${totalCount} ${plural(totalCount, {one: 'товар', few: 'товара', many: 'товаров'})} / ${totalPrice} ₽`
              : 'пусто'}
        </span>
      <button onClick={handleModal}>
        Перейти
      </button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func,
  handleModal: PropTypes.func,
  totalPrice: PropTypes.number


};

export default React.memo(Controls);
