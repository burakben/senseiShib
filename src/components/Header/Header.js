import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/common/logo.png';
import More from './../../icons/More';
import Docs from './../../icons/Docs';

const menu = [
    { title: "Swap", to: "/", active: true, id: 0 },
    { title: "Liquidity", to: "/", active: false, id: 1 }
];

export default function Header() {
    const [accounts] = useState([""]);

    return (
        <header className="header">
            <div className="header__wrapper container">
                <Link to="/" className="header__logo">
                    <img src={logo} alt="logo" className="header__logo-image" />
                </Link>
                <ul className="header__menu">
                    {menu.map(item => {
                        return (
                            <li className='header__menu-item' key={item.id}>
                                <Link to={item.to} className={'header__menu-link' + (item.active ? " active" : "")}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
                <input value="$1.03" className='input header__input' readOnly />
                <button className={'button button--header' + (accounts[0] ? " button--white" : " button--red")}>
                    {accounts[0] ?
                        <>
                            <Docs className="button__icon" />
                            <span>{accounts[0]}</span>
                        </>
                        :
                        "Connect Wallet"}
                </button>
                <button className='button button--more'>
                    <More className="button__icon" />
                </button>
            </div>
        </header>
    )
}
