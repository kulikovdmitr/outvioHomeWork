const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const FAKE_DB_ORDERS = [];

app.get("/api/order", (req, res) => {
  const newOrderId = uuidv4();
  FAKE_DB_ORDERS.push({ id: newOrderId });
  return res.send({ orderId: newOrderId });
});

app.post("/api/order", (req, res) => {
  const existingOrderIndex = FAKE_DB_ORDERS.findIndex(
    (order) => order.id === req.body.orderId
  );

  if (existingOrderIndex === -1) {
    return res
      .status(500)
      .send({ success: false, error: "INCORRECT_ORDER_ID" });
  }

  FAKE_DB_ORDERS[existingOrderIndex] = {
    ...FAKE_DB_ORDERS[existingOrderIndex],
    pizzas: req.body.pizzas,
  };
  return res.send({ success: true });
});

server.listen(3001, () => {
  console.log(`Server started on ${3001}`);
});
