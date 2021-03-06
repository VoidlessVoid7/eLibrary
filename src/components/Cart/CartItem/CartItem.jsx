import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";
import { useStateValue } from "../../../StateProvider";
import { commerce } from "../../../lib/commerce";

function CartItem({ item }) {
  const [,dispatch] = useStateValue();
  const classes = useStyles();

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    dispatch({ type: "SET_CART", data: cart });
  };
  return (
    <Card className={classes.root}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <div className={classes.content}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.name}</Typography>
        </CardContent>
        <CardActionArea className={classes.cartActions}>
          <div className={classes.buttons}>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            className={classes.rembtn}
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </CardActionArea>
      </div>
    </Card>
  );
}

export default CartItem;
