const express = require("express");
const app = express();

let usuario = {
  nombre: "",
};
let respuesta = {
  error: false,
  codigo: 200,
  mensaje: "",
};

app.get("/usuario", function (req, res) {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "",
  };
  if (usuario.nombre === "") {
    respuesta = {
      error: true,
      codigo: 501,
      mensaje: "Hola desconocido!",
    };
  } else {
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "respuesta del usuario",
      respuesta: "Hola" + usuario + "!",
    };
  }
  res.send("<h1>respuesta</h1>");
});

app.listen(3000, () => console.log("Listening on port 3000!"));
