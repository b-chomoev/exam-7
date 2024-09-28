import React from "react";

interface Props {
    name: string;
    count: number;
    price: number;
}

const OrderDetails: React.FC<Props> = ({name, count, price}) => {
    return (
        <div className='orderDetailsMenu'>
            <p className='orderItems'>
                <span>{name}</span> <span>x{count}</span> <strong>{price} KGS</strong>
            </p>
        </div>
    );
};

export default OrderDetails;