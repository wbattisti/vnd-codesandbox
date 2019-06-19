import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ItemList from "../components/ItemList";

class VendorPage extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit">
              <ShoppingCart />
            </IconButton>
          </Toolbar>
        </AppBar>
        <ItemList />
      </div>
    );
  }
}
export default VendorPage;
