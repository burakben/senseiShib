import Select from "../Select";
import BNB from './../../icons/BNB';
import ETH from './../../icons/ETH';

export default function FormInput({ value, setValue, className }) {

    const dropdownList = [
        { title: "BNB", selected: true, icon: BNB, id: 0 },
        { title: "ETH", selected: false, icon: ETH, id: 1 }
    ];

    function getInputWidth() {
        return String(value).length > 1 ? (String(value).length * 32) * (String(value).length > 1 ? 0.85 : 0) : 32;
    }

    return (
        <div className={"input-wrapper input-wrapper--form " + (className || "")}>
            <div className="input-wrapper__column">
                <p className="input-wrapper__text">Balance: 345</p>
                <Select list={dropdownList} className="select--form" />
            </div>
            <div className="input-wrapper__column">
                <p className="input-wrapper__text">From</p>
                <div className="input-wrapper__row">
                    <p className="input-wrapper__text">~$166872.67</p>
                    <input value={value} className="input-wrapper__input input" onChange={(e) => setValue(e.target.value)} style={{ width: getInputWidth() }} />
                </div>
            </div>
        </div>
    )
}
