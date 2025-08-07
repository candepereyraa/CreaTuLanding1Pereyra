import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../firebaseConfig"; // Asegurate de importar tu app de firebaseConfig
  

export default function CheckoutForm({ onSendForm, carrito }) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [compraId, setCompraId] = useState(null);
console.log("Carrito recibido en CheckoutForm:", carrito);
  const handleCompra = async () => {
    const db = getFirestore(app);
    const ventasCollection = collection(db, "ventas");

    const pedido = {
      nombre,
      telefono,
      email,
      carrito,
      fecha: new Date()
    };

    try {
      const docRef = await addDoc(ventasCollection, pedido);
      setCompraId(docRef.id)
      if (onSendForm) onSendForm(); 
    } catch (error) {
      console.error("Error al registrar la compra:", error);
    }
  };

  return (
    <div className="formulario">
      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          placeholder="Ej: Emma"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telefono">Teléfono</label>
        <input
          type="text"
          placeholder="Ej: 1122334455"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Ej: fentybeauty@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleCompra}>Comprar</button>
      {compraId && <h2>Compra registrada con ID: {compraId}</h2>}
    </div>
  );
}