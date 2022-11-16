import React, { Component } from 'react';
import { Button } from "@material-ui/core";

function ViewIntro({ onOrder }) {
  return (
    <Button variant="contained" color="primary" marker="entry-btn" onClick={onOrder}>
      Order your 🍕
    </Button>
  );
}

export default ViewIntro;
