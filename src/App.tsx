import './App.css';
import {useState} from "react";
import hamburger from './assets/hamburger.png';
import cheeseburger from './assets/cheeseburger.png';
import fries from './assets/fries.png';
import coffee from './assets/coffee.png';
import tea from './assets/tea.png';
import cola from './assets/cola.png';
import Items from "./components/Items/Items.tsx";

const App = () => {
    const [items, setItems] = useState([
        {id: '1', name: 'Hamburger', price: 80, image: hamburger},
        {id: '2', name: 'Cheeseburger', price: 90, image: cheeseburger},
        {id: '3', name: 'Fries', price: 45, image: fries},
        {id: '4', name: 'Coffee', price: 70, image: coffee},
        {id: '5', name: 'Tea', price: 50, image: tea},
        {id: '6', name: 'Cola', price: 40, image: cola}
    ]);

    const getItemInfo = (name: string) => {
        console.log(name);
    };

    const itemButton = items.map(i => (
            <Items key={i.id} price={i.price} name={i.name} image={i.image} onAddButton={() => getItemInfo(i.name)}/>
    ));

    return (
        <div className='appStyle'>
            <div className='mainMenu'>
                <div className='orderedItems'>
                    <h2 className='textInfo'>Order Details:</h2>
                </div>
                <div className='menuItems'>
                    <h2 className='menu-title'>Add Items: </h2>
                    <div className='gridContainer'>
                        {itemButton}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
