import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProds } from "../async"; // aunque no lo usamos para fetch con categoría

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      
      fetch(`https://fakestoreapi.com/products/category/${categoryId}`)
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    } else {
     
      getProds()
        .then(data => setProducts(data))
        .catch(err => console.error(err));
    }
  }, [categoryId]);

  return (
    <section>
      <h2>Todos nuestros productos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}></div>
      {products.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {products
            .filter((product) => product.image && product.image !== "")
            .map((product) => (
              <article
                className="articulo"
                key={product.id}
                style={{ padding: "10px", width: 200 }}
              >
                <div className="div">
                  <img
                    className="imagen"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <h4>{product.name}</h4>
                <p>
                  Precio: {product.price_sign}
                  {product.price}
                </p>
                <Link to={`/product/${product.id}`}>
                  <button>Ver más detalles</button>
                </Link>
              </article>
            ))}
        </div>
      )}
    </section>
  );
}
