import React, { useContext } from "react";
import { MdDelete } from "react-icons/md"; // Import MdDelete icon
import blogContext from "../Context/blogs/BlogContext";
import coffee from "../assets/lamp.jpg";
import "./CartItems.css"; // Import the CSS file for styling

function CartItems() {
  const context = useContext(blogContext);
  const {
    state: { cart },
    dispatch,
  } = context;

  console.log(cart);

  // Calculate total price
  const Total = cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <>
      <div className="container home">
        <div className="productContainer-cart">
          <ul className="list-group">
            {cart.map((prod) => {
              return (
                <li className="list-group-item cart-item" key={prod.id}>
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img
                        src={coffee}
                        alt={prod.title}
                        className="img-fluid cart-item-image"
                      />
                    </div>
                    <div className="col-md-3 cart-item-details">
                      <h5 className="cart-item-title">{prod.title}</h5>
                      <p className="cart-item-price">
                        ${prod.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="col-md-3">
                      <select
                        value={prod.qty}
                        onChange={(e) =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: prod.id,
                              qty: Number(e.target.value),
                            },
                          })
                        }
                        className="form-control cart-item-select"
                      >
                        {[...Array(prod.inStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-2">
                      <button
                        type="button"
                        className="btn btn-light cart-item-delete"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="filter summary">
          <div className="summary-details">
            <h4>Total items: ({cart.length})</h4>
            <h4>Total: Rs.{Total.toFixed(2)}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
