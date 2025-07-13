import { useRef } from "react";

function Buscar() {
  const inputBuscar = useRef(null);

  const enfocarCampo = () => {
    inputBuscar.current.focus();
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        ref={inputBuscar}
        type="text"
        placeholder="Buscar algo..."
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button
        onClick={enfocarCampo}
        style={{
          marginLeft: "10px",
          padding: "8px 16px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Enfocar campo
      </button>
    </div>
  );
}

export default Buscar;