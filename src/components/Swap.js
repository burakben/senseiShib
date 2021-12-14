import { useState } from "react";
import Form from "./Form/Form";
import FormInput from './Form/FormInput';
import Info from './../icons/Info';
import Arrows from './../icons/Arrows';

export default function Swap() {
    const [fromValue, setFromValue] = useState(345);
    const [toValue, setToValue] = useState(3.49965);
    const [accounts] = useState([""]);

    return (
        <Form className="form--swap" title="Swap">
            <>
                <p className="form__text form__text--mb">Trade tokents in an instant</p>
                <FormInput value={fromValue} setValue={setFromValue} />
                <button className="button button--round form__round">
                    <Arrows className="button__icon" />
                </button>
                <FormInput value={toValue} setValue={setToValue} />
                <div className="form__row">
                    <p className="form__text">Price</p>
                    <span className="form__text form__text--main">99.9849 BNB per ETH</span>
                </div>
                {accounts[0] ?
                    <button className="button button--red button--form">Connect Wallet</button> :
                    <button className="button button--red button--form">Swap</button>
                }
                <div className="form__info">
                    <ul className="form__info-list">
                        <li className="form__info-item">
                            <span className="form__text">
                                <p>Minimum received</p>
                                <Info className="form__info-icon" />
                            </span>
                            <span className="form__text form__text--main">3.486 BNB</span>
                        </li>
                        <li className="form__info-item">
                            <span className="form__text">
                                <p>Price impact</p>
                                <Info className="form__info-icon" />
                            </span>
                            <span className="form__text form__text--main">0.69%</span>
                        </li>
                        <li className="form__info-item">
                            <span className="form__text">
                                <p>Trade fee</p>
                                <Info className="form__info-icon" />
                            </span>
                            <span className="form__text form__text--main">0.346 BNB ~ 167.103 $</span>
                        </li>
                        <li className="form__info-item">
                            <span className="form__text">
                                <p>Return fee</p>
                                <Info className="form__info-icon" />
                            </span>
                            <span className="form__text form__text--main">135.46400 ETH ~ 167.103 $</span>
                        </li>
                    </ul>
                </div>
            </>
        </Form>
    )
}
