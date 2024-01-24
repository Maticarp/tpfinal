import CartWidget from './CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <h1>Mia Tienda</h1>
            <nav>
                <ul>
                    <li>Camperas</li>
                    <li>Camisetas</li>
                    <li>Pantalones</li>
                </ul>
            </nav>
            
            <CartWidget/>
        </header>
    )
}

export default NavBar