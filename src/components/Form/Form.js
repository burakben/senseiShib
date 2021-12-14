import Gear from "../../icons/Gear";
import History from './../../icons/History';

export default function Form({ className, title, children }) {

    return (
        <div className={"form container " + (className || "")}>
            <div className="form__wrapper">
                <div className="form__top">
                    <h1 className="form__title">{title}</h1>
                    <button className="form__top-button">
                        <Gear className="form__top-button-icon" />
                    </button>
                    <button className="form__top-button">
                        <History className="form__top-button-icon" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}
