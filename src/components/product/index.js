import {cn as bem} from "@bem-react/classname";
import BasketTool from "../basket-tool";
import {useCallback, useEffect, useState} from "react";
import useSelector from "../../store/use-selector";
import useStore from "../../store/use-store";
import Head from "../head";
import {useParams} from "react-router-dom";

function Product() {
  const { productId } = useParams();
  const cn = bem('Product');
  const store = useStore();

  useEffect(() => {
    store.actions.product.load(productId)
  }, [productId])

  const callbacks = {
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
  }

  const select =  useSelector(state => ({
    amount: state.basket.amount,
    sum: state.basket.sum,
    product: state.product.product,
  }))
console.log(select.product.description)
  return (<div className={cn()}>
    <div className={cn('title')}>
      <Head title={select.product.title}/>
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
                  sum={select.sum}/>
      <div className={cn('info')}>
        <span>
          {select.product.description}
        </span>
        <p>Страна производитель <span>
           {select.product.madeIn?.title} {select.product.madeIn?.code}
        </span></p>
      </div>
      {select.product.description}
    </div>
  </div>)
}

export default Product
