import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                {/* не надо указывать папку из которой доставать */}
                <Link to={"/"}>
                    <img width={40} height={40} src="/img/logo.png" />
                    <div>
                        <h3 className="text-uppercase">Sneaker store react</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </Link>
            </div>

            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
                    <span>1205 руб.</span>
                </li>


                <li className="mr-20 cu-p">
                    <Link to={"/favorites"}>
                        <img width={18} height={18} src="/img/favorite-outline.svg" alt="Закладки" />
                    </Link>
                </li>


                <li className="cu-p">
                    <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
                </li>
            </ul>
        </header>
    );
}

export default Header; 