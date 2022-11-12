import React from 'react';
import { Button } from "@material-ui/core";

function ViewIntro({ onOrder }) {
  return (
    <Button variant="contained" color="primary" onClick={onOrder}>
      Order your 🍕
    </Button>
  );
}

export default ViewIntro;
