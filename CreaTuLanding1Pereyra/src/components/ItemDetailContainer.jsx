import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../async";
export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getSingleProduct(id).then(item => setProduct(item));
  }, [id]);

  return (
    <section>
      <h2>Vista de Product Detail</h2>
      <h3>{product.title}</h3>
      <article>
        <img
          className="imagen"
          src={product.image}
          alt={product.title}
        />
      </article>
      <p>{product.description}</p>
    </section>
  );
}
