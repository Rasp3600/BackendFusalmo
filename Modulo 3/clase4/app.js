const express = require("express");
const axios = require("axios");

const app = express();

const url = "https://jsonplaceholder.typicode.com/todos";

app.get("/todos", async (req, res) => {
  try {
    const response = await axios.get(url);
    console.log("Todos los datos");
    console.log(response.data + "\n");

    res.json(response.data);
  } catch {
    console.error("Error al obtener los usuarios:", error.message);
    res.status(500).json({ error: "Erro del servidor" });
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(url);
    const titulo = response.data.filter((t) => t.id == id).map((t) => t.title);
    console.log("Datos filtrados por ID \n");
    res.json(titulo);
    console.log(titulo);
  } catch {
    console.error("Error al obtener los usuarios:", error.message);
    res.status(500).json({ error: "Erro del servidor" });
  }
});

app.get("/todos/title/:title", async (req, res) => {
  try {
    const title = req.params.title;
    const response = await axios.get(url);
    const titulo = response.data.find((t) => t.title == title);
    console.log("Datos filtrados por Titulo \n");
    res.json(titulo);
    console.log(titulo);
  } catch {
    console.error("Error al obtener los usuarios:", error.message);
    res.status(500).json({ error: "Erro del servidor" });
  }
});

app.get("/todos/numeroreg/:n", async (req, res) => {
  try {
    const numero = req.params.n;
    const response = await axios.get(url);

    const registrosAmostrar = response.data.slice(0, numero);
    console.log(`Datos a mostrar ${numero}`);
    registrosAmostrar.forEach((objeto) => {
      console.log(objeto);
    });

    res.json(response.data);
  } catch {
    console.error("Error al obtener los usuarios:", error.message);
    res.status(500).json({ error: "Erro del servidor" });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
