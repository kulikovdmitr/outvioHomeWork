import React from 'react';
import { Button } from "@material-ui/core";

function AddPizza({ onAdd, disabled }) {
  return (
    <Button
      fullWidth
      onClick={onAdd}
      variant="contained"
      color="secondary"
      marker="add-pizza-btn"
      disabled={disabled}
    >
      Add pizza
    </Button>
  );
}

export default AddPizza;
