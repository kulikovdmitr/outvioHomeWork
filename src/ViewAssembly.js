import { useState, useCallback, useEffect } from "react";

import { Paper, makeStyles, Typography, Button } from "@material-ui/core";

import AddPizza from "./AddPizza";
import PizzaEntry from "./PizzaEntry";
import appFetch from "./appFetch";

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    width: "100%",
    maxWidth: "600px",
    padding: theme.spacing(2),

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));

const apiGetOrderId = () => appFetch("/api/order", "GET");

const apiSubmitOrder = (data) => appFetch("/api/order", "POST", data);

function ViewAssembly({ onOrdered }) {
  const classes = useStyles();

  const [pizzas, setPizzas] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGetOrderId()
      .then((result) => {
        setOrderId(result.orderId);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || err.toString());
        setLoading(false);
      });
  }, []);

  const handleRemovePizza = useCallback(
    (pizzaIndex) =>
      setPizzas((prev) => {
        const newArr = [...prev];
        newArr.splice(pizzaIndex, 1);
        return newArr;
      }),
    []
  );

  const handleUpdatePizza = useCallback((pizzaIndex, diff) => {
    setPizzas((prev) => {
      return prev.map((pizza, index) => {
        if (index === pizzaIndex) {
          if (typeof diff.topping !== "undefined") {
            if (pizza.toppings.includes(diff.topping)) {
              return {
                ...pizza,
                toppings: pizza.toppings.filter((t) => t !== diff.topping),
              };
            } else {
              return {
                ...pizza,
                toppings: [...pizza.toppings, diff.topping],
              };
            }
          } else {
            return { ...pizza, ...diff };
          }
        }
        return pizza;
      });
    });
  }, []);

  const handleSubmit = useCallback(() => {
    setLoading(true);

    apiSubmitOrder({ pizzas, orderId })
      .then(() => {
        onOrdered();
      })
      .catch((err) => {
        setError(err.message || err.toString());
        setLoading(false);
      });
  }, [pizzas, orderId, onOrdered]);

  const isSubmitDisabled =
    pizzas.length === 0 ||
    pizzas.some((pizza) => pizza.size === "" || pizza.toppings.length === 0);

  return (
    <Paper elevation={3} classes={{ root: classes.paperRoot }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Assemble your pizza(s)
      </Typography>

      {pizzas.map((pizza, index) => (
        <PizzaEntry
          key={index}
          data={pizza}
          index={index}
          onRemove={handleRemovePizza}
          onUpdate={handleUpdatePizza}
          disabled={isLoading}
        />
      ))}

      <AddPizza
        onAdd={() => setPizzas((prev) => [...prev, { size: "", toppings: [] }])}
        disabled={pizzas.length >= 3 || isLoading}
      />

      {error !== null && (
        <p style={{ color: "#DC2626", marginTop: "24px" }}>{error}</p>
      )}

      <Button
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitDisabled || isLoading}
        onClick={handleSubmit}
        style={{ marginTop: "24px" }}
      >
        submit order
      </Button>
    </Paper>
  );
}

export default ViewAssembly;
