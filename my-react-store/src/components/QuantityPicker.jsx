// imports
import { useState } from "react";

// logic
function QuantityPicker()
{
const [quantity,setQuantity]=useState (1);


    function decrease()
    {
        console.log("decreasing");
        let val = quantity - 1;
        // if (quantity === 1) return;
        if (quantity < 1) {
            val = 1;
        };
        setQuantity(val);
    }

    return(

        <div className="qt-picker" >
            <button onClick={decrease}> - </button>
            <label>{quantity}</label>
            <button> + </button>

        </div>
    );
}

// export
export default QuantityPicker;