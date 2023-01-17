import { Link } from "react-router-dom"
function Menu() {
    return (
      <nav className="menu">
        <Link className="menu__item" to="/">Главная</Link>
        <Link className="menu__item" to="/drift">Дрифт-такси</Link>
        <Link className="menu__item" to="/timeattack">Time Attack</Link>
        <Link className="menu__item" to="/forza">Forza Karting</Link>
      </nav>
    );
}

export default Menu;