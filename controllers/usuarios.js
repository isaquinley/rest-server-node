const { response } = require("express");

const usuariosGet = (req, res = response) => {
  const { nombre } = req.query;
  res.json({
    msg: "Get API controlador",
    nombre,
  });
};

const usuariosPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "Post API controlador",
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "Put API controlador",
    id,
  });
};

const usuariosDetele = (req, res = response) => {
  res.json({
    msg: "Delete API controlador",
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "Patch API controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDetele,
  usuariosPatch,
};
