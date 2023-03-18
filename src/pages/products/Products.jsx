import { useState } from 'react';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { Link, useLoaderData } from 'react-router-dom';
import { linkMaker } from '../../utils/utilExporter';

const Products = () => {
  const products = useLoaderData();
  console.log(products);
  const [list, setList] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <section className="products_page">
      <div className="list_maker">
        <button onClick={() => setList(false)}>
          <TbGridDots />
        </button>
        <button onClick={() => setList(true)}>
          <AiOutlineUnorderedList />
        </button>
      </div>

      <ul className={list ? 'products list' : 'products'}>
        {[...products, ...products, ...products].map(
          ({ title, img, price }, i) => {
            return (
              <li key={i} className="card">
                <Link to={linkMaker(title)}>
                  <img src={img} alt="product_img" className="product_img" />
                </Link>
                <div className="info">
                  <h4 className="title">{title}</h4>
                  <h6 className="price"> ₺ {price},00</h6>
                  <div className="flex">
                    {list ? (
                      <div className="quant-changer">
                        <span className="quantity"> {count} </span>
                        <div className="buttons">
                          <button onClick={() => setCount(c => c + 1)}>
                            +
                          </button>
                          <button onClick={() => setCount(c => c - 1)}>
                            -
                          </button>
                        </div>
                      </div>
                    ) : null}
                    <button className="buy">
                      <span> Satın Al </span>
                    </button>
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default Products;
