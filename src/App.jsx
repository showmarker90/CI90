import React, { useState } from "react";
import Counter from "./components/Counter";
import { Button } from "antd";
import axios from "axios";

const URL = "https://fakestoreapi.com/products";

// bất đồng bộ và đồng bộ -> event loop

// promises
// callback
// async await

const App = () => {
  const callAPI = async () => {
    const response = await axios.get(URL); //10 minutes

    console.log(response.data);
  };
  return (
    <div>
      <Button type="primary" onClick={callAPI}>
        Get products
      </Button>
    </div>
  );
};

export default App;
