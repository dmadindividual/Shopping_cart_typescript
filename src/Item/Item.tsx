import React from "react";

import { Button } from "@mui/material";
import { CartItemType } from "../App";
import { Wrapper } from "./item.styles";

type Prop = {
    item: CartItemType;
    handleAdd: (clickedItem: CartItemType) => void; // Changed return type to void
};

const Item: React.FC<Prop> = ({ item, handleAdd }) => {
    return (
        <Wrapper>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => handleAdd(item)}>Add to cart</Button>
        </Wrapper>
    );
};

export default Item;
