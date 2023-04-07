import React from 'react';

const Cart = ({cart ,handleRemoveToCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <p>You can add more product at a time</p>
    }
    return (
        <div>
            <h3>Order Summary: {cart.length}</h3>
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                   
                > {tshirt.name} <button
                onClick={()=>handleRemoveToCart(tshirt._id)} >x</button> </p>)
            }
        </div>
    );
};

export default Cart;