import React from "react";

function PriceLable(props){
    return (
    <div className="disButtonBase-root disChip-root makeStyles-price-23 disChip-outlined">
          <span className="disChip-label">{props.sellPrice} NOT</span>
        </div>
    );
}

export default PriceLable;