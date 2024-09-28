import React from "react";

interface Props {
    name: string;
    count: number;
    price: number;
    onDeleteItem: React.MouseEventHandler;
}

const OrderDetails: React.FC<Props> = ({name, count, price, onDeleteItem}) => {
    return (
        <div className='orderDetailsMenu'>
            <p className='orderItems'>
                <span>{name}</span> <span>x{count}</span> <strong>{price} KGS</strong>
                <button type='button' className='removeBtn' onClick={onDeleteItem}>Delete</button>
            </p>
        </div>
    );
};

export default OrderDetails;