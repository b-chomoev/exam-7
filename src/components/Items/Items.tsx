import React from 'react';

interface Props {
    image: string;
    name: string;
    price: number;
    onAddButton: React.MouseEventHandler;
}

const Items: React.FC<Props> = ({image, name, price, onAddButton}) => {
    return (
        <div className='addItemsMenu'>
            <button
                type='button'
                className='itemBtn'
                onClick={onAddButton}
            >
                <img className='btnImage' src={image} alt={name}/>
                <h3>{name}</h3>
                <p>Price: {price} KGS</p>
            </button>
        </div>
    );
};

export default Items;