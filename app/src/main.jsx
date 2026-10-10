import React from "react";
import ReactDOM from "react-dom/client";
import PlataformaENEM from "./plataforma-enem.jsx";

const raiz = document.getElementById("raiz");
try {
  ReactDOM.createRoot(raiz).render(React.createElement(PlataformaENEM));
} catch (e) {
  raiz.innerHTML = '<pre style="padding:20px;color:#96253C;white-space:pre-wrap">' + (e && e.stack ? e.stack : String(e)) + "</pre>";
}
