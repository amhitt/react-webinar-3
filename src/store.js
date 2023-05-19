

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = {
      ...initState,
      cart: {}
    };
    this.listeners = []; // Слушатели изменений состояния
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  /**
   * Добавление товара в корзину
   * @param productFromList
   */

  addToCart(productFromList) {
    // const selectedProduct = this.state.cart.find(product => product.code === productFromList.code)
    // console.log(selectedProduct)
    // if(selectedProduct) {
    //   this.setState({
    //     ...this.state,
    //     cart: this.state.list.map((item) => {
    //       if (item.code === productFromList) {
    //         return { ...item, count: item.count +1 };
    //       }
    //       return item;
    //     }),
    //   });
    // } else {
    //   const item = this.state.list.find((item) => item.code === productFromList.code);
    //   this.setState({
    //     ...this.state,
    //     cart: [
    //       ...this.state.cart,
    //       {
    //         ...item,
    //         count: 1,
    //       },
    //     ],
    //   });
    // }
    //
    // const itemInCart = this.state.cart.find(product => product.code === productFromList.code);
    //
    // if (!itemInCart) {
    //   this.setState({
    //     ...this.state,
    //     cart: [
    //       ...this.state.cart,
    //       {
    //         ...item,
    //         count: 1,
    //       }
    //     ]
    //   })
    // } else {
    //   this.setState({
    //     ...this.state,
    //     cart: [
    //       ...this.state.cart,
    //       {
    //         ...itemInCart,
    //
    //       }
    //     ]
    //   })
    // }



    this.setState({
      ...this.state,
      cart: {
        ...this.state.cart,
        [productFromList.code]:
          this.state.cart[productFromList.code]?.length > 0 ?
            [...this.state.cart[productFromList.code], productFromList] :
            [productFromList]
      }

    })
  }

  deleteFromCart(productFromCart) {
    this.setState({
      ...this.state,
      cart: Object.keys(this.state.cart).reduce((acc, cur) => {
        if (cur == productFromCart.code) {
          console.log('мы в условии')
          return acc;
        }

        if (cur != productFromCart.code) {
          return {
            ...acc,
            [cur]: [...this.state.cart[cur]],
          }
        }
      }, {})
    })
  }
}

export default Store;
