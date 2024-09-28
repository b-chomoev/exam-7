import React from "react";

interface Props {
    name: any;
}

const OrderDetails: React.FC<Props> = ({name}) => {
    return (
        <div className='orderDetailsMenu'>
            <p>
                <span>{name}</span>
            </p>
        </div>
    );
};

export default OrderDetails;