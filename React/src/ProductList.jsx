import Card from "./Card";

let products = [
  {
    featured: true,
    title: "watch",
    oldPrice: 1200,
    price: 1000,
    description:
      "em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis,",
  },
  {
    featured: false,
    title: "mouse",
    oldPrice: 11200,
    price: 11000,
    description:
      "em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis,",
  },
  {
    featured: false,
    title: "kewyord",
    oldPrice: 1300,
    price: 100,
    sale:true,
    description:
      "em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis,",
  },
  {
    featured: false,
    title: "KeyRing",
    oldPrice: 200,
    price: 100,
    sale: true,
    description:
      "em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis,",
  },
  {
    featured: true,
    title: "Sunglass",
    oldPrice: 800,
    price: 600,
    sale: true,
    description:
      "em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis,",
  },
  {
    featured: true,
    title: "Mobile",
    oldPrice: 12000,
    price: 10000,
    description:
      "em ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ea odio, perferendis,",
  },
];

/* component in react */

/* let nonFeatured = products.filter((item) => !item.featured); */

function ProductList() {
  return (
    <>
      <h1>Featrued products</h1>
      <hr />
      <div id="products-list" className="product-list">
        {products
          .filter((item) => item.featured)
          .map((el) => {
            return <Card product={el}></Card>;
          })}
        {/*  {featured.map((el) => {
          return <Card product={el} />;
        })} */}
      </div>

      <h1>Normal Products</h1>
      <hr />
      <div className="normal-product">
        {products
          .filter((item) => !item.featured)
          .map((el) => {
            return <Card product={el} />;
          })}
      </div>
    </>
  );
}

export default ProductList;
