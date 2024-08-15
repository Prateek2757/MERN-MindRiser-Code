function Card(props) {
  let product = props.product;
  return (
    <div className="product">
      <h2>
        {product.title}
        {product.sale ? <span className="sale"> sale </span> : ""}
        {/*  <span> {product.sale && "sale" } </span> */}
      </h2>

      
      <p>
        <span className="old-price">Rs:{product.oldPrice}</span> Rs:
        {product.price}
      </p>
      <p>{product.description}</p>
    </div>
  );
}
export default Card;

