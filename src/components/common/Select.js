import React, { useEffect, useState } from 'react';
import Enlarge from '../../icons/Enlarge';

export default function Select({ className, list, callback }) {
    const [selectList, setSelectList] = useState(list);
    const [opened, setOpened] = useState(false);
    let selectedTitle = selectList.find(item => item.selected === true).title;
    let SelectedIcon = selectList.find(item => item.selected === true).icon;

    function selectItem(index) {
        setSelectList(state => state.map((item, itemIndex) => ({ ...item, selected: itemIndex === index ? true : false })));
        callback && callback(index);
    }

    function toggleSelect() {
        setOpened(state => !state);
    }

    useEffect(() => {
        function handleDocumentClick() {
            if (opened) {
                toggleSelect();
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        }
    }, [opened]);

    return (
        <div className={"select " + (className || "") + (opened ? " opened" : "")}>
            <button className="select__button" onClick={toggleSelect}>
                <SelectedIcon className="select__button-icon" />
                <span className="select__button-text">{selectedTitle}</span>
                <Enlarge className="select__button-arrows" />
            </button>
            <ul className="select__list">
                {selectList.map((item, index) => {
                    return (
                        <li className="select__item" key={item.id}>
                            <button className="select__item-button" onClick={() => {
                                selectItem(index);
                                item.onClick && item.onClick();
                            }}
                            >
                                {item.icon && <item.icon className="select__item-icon" />}
                                <span>{item.title}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
