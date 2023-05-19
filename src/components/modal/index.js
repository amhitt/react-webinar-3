import React from "react";
import "./style.css"
import Head from "../head";
import Item from "../item";


function Modal({handleModal, cart, deleteFromCart}) {

  return (
    <div className='Modal'>
      <div className='Modal-container'>
        <Head title='Корзина'>
          <button className='Modal-btn' onClick={handleModal}>
            Закрыть
          </button>
        </Head>
        {Object.keys(cart).map((itemsCode) => {

          return cart[itemsCode] && <div key={itemsCode} className='List-item'>
            <Item
              item={cart[itemsCode][0]}
              count={cart[itemsCode].length}
              onAction={deleteFromCart}
              buttonTitle='Удалить'
            />
          </div>;
        })}
      </div>


    </div>
  )
}

export default React.memo(Modal)
