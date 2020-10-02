import React from 'react';

import items from '../../endpoints/abaixo-10-reais.json';
// import items from '../../endpoints/acima-10-reais.json';

import ProductList from '../../components/ProductList';

import './styles.css';

function Index() {
  return (
    <section id="cart">
      <header>
        <h1>Meu carrinho</h1>
      </header>

      <article>
        <div id="product-list">
          <ProductList items={items.items} />
        </div>
        
        <div id="total">
          <div id="price">
            <span>Total</span>
            <span>R$ {items.value / 100}</span>
          </div>
          { items.value > 1000 &&
            <span id="frete-gratis">Parabéns, sua compra tem frete grátis !</span>
          }
        </div>
      </article>

      <footer>
        <button>Finalizar compra</button>
      </footer>
    </section>
  );
}

export default Index;