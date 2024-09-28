import './App.css';
import hamburger from './assets/hamburger.png';
import cheeseburger from './assets/cheeseburger.png';
import fries from './assets/fries.png';
import coffee from './assets/coffee.png';
import tea from './assets/tea.png';
import cola from './assets/cola.png';
import Items from "./components/Items/Items.tsx";
import OrderDetails from "./components/OrderDetails/OrderDetails.tsx";
import {useState} from "react";

interface Menu {
    id: string;
    name: string;
    price: number;
    image: string;
}

interface OrderItem {
    id: string;
    name: string;
    price: number;
    count: number;
}

const Menu: Menu[] = [
    {id: '1', name: 'Hamburger', price: 80, image: hamburger},
    {id: '2', name: 'Cheeseburger', price: 90, image: cheeseburger},
    {id: '3', name: 'Fries', price: 45, image: fries},
    {id: '4', name: 'Coffee', price: 70, image: coffee},
    {id: '5', name: 'Tea', price: 50, image: tea},
    {id: '6', name: 'Cola', price: 40, image: cola},
];

const App = () => {
    const [orders, setOrders] = useState<OrderItem[]>([]);

    const getItemInfo = (name: string) => {
        const selectedItem = Menu.find(item => item.name === name);

        if (selectedItem) {
            setOrders(prevState => {
                const existingItem = prevState.find(item => item.name === name);

                if (existingItem) {
                    return prevState.map(item => item.name === name ? {...item, count: item.count + 1} : item);
                } else {
                    return [...prevState, {...selectedItem, count: 1}];
                }
            });
        }
    };

    const getTotal = () => {
        return orders.reduce((acc, number) => {
            return acc + (number.price * number.count);
        }, 0);
    };

    const deleteItem = (item: string) => {
        const copyItem = orders.filter(i => i.name !== item);
        setOrders(copyItem);
    };

    const itemButton = Menu.map(i => (
        <Items key={i.id} price={i.price} name={i.name} image={i.image} onAddButton={() => getItemInfo(i.name)}/>
    ));

    const orderedItems = orders.map(item => (
        <OrderDetails key={item.id}
                      name={item.name}
                      count={item.count}
                      price={item.price}
                      onDeleteItem={() => deleteItem(item.name)}
        />
    ));

    return (
        <div className='appStyle'>
            <div className='mainMenu'>
                <div className='orderedItems'>
                    <h2 className='textInfo'>Order:</h2>
                    {orders.length > 0 ? <h4>Total price: {getTotal()} KGS</h4> :
                        <p className='ordered-text'>You are welcome to make an order from the Menu!</p>}
                    {orderedItems}
                </div>
                <div className='menuItems'>
                    <h2 className='menu-title'>Menu: </h2>
                    <div className='gridContainer'>
                        {itemButton}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
