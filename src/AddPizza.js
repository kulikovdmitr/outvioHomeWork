import React from 'react';
import { Button } from "@material-ui/core";

function AddPizza({ onAdd, disabled }) {
  return (
    <Button
      fullWidth
      onClick={onAdd}
      variant="contained"
      color="secondary"
      disabled={disabled}
    >
      Add pizza
    </Button>
  );
}

export default AddPizza;
