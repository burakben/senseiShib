import stakingIcon from "../../img/staking/staking.svg";
import StakingItem from './StakingItem';
import Accordion from './../common/Accordion/Accordion';

const stakingList = [
    {
        proposal: 30,
        left: 17,
        apr: 27.00,
        staked: 3211.12,
        earnings: 33.12,
        id: 0
    },
    {
        proposal: 90,
        left: 17,
        apr: 37.04,
        staked: 3211.12,
        earnings: 33.12,
        id: 1
    },
    {
        proposal: "VIP",
        left: 17,
        apr: 69.04,
        staked: 3211.12,
        earnings: 33.12,
        id: 3
    }
];

const questions = [
    {
        title: "Why Stake with Sensei Swap?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia"
    },
    {
        title: "How Does the 30-Day Staking Pool Work?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia"
    },
    {
        title: "How Does the 90-Day Staking Pool Work?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia"
    },
    {
        title: "How Does the VIP Staking Pool Work?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia"
    }
];

export default function Staking({ mobileScreen }) {

    return (
        <div className="staking container">
            <div className="staking__banner staking__background">
                <div className="staking__banner-column staking__banner-column--1">
                    <h3 className="staking__title staking__title--mb">Staking Balance</h3>
                    <p className="staking__balance">13211.44 $SENSEI</p>
                </div>
                <div className="staking__banner-column staking__banner-column--2">
                    <img src={stakingIcon} className="staking__icon" alt="Staking" />
                </div>
                <div className="staking__banner-column staking__banner-column--3">
                    <h3 className="staking__title staking__title--mb">Total Earnings</h3>
                    <p className="staking__balance">+567.13 ADA</p>
                </div>
                <div className="staking__banner-column staking__banner-column--4">
                    <h3 className="staking__title staking__title--mb">Available Rewards</h3>
                    <p className="staking__balance staking__balance--big">+567.13 ADA</p>
                </div>
                <div className="staking__buttons">
                    <button className="button button--red staking__button">Claim Rewards</button>
                    <button className="button button--grey staking__button">Unstake</button>
                </div>
            </div>
            {!mobileScreen && <div className="staking__header">
                <div className="staking__column staking__column--1">
                    <h4 className="staking__title">Proposal</h4>
                </div>
                <div className="staking__column staking__column--2">
                    <h4 className="staking__title">Days Left</h4>
                </div>
                <div className="staking__column staking__column--3">
                    <h4 className="staking__title">APR</h4>
                </div>
                <div className="staking__column staking__column--4">
                    <h4 className="staking__title">Staked</h4>
                </div>
                <div className="staking__column staking__column--5">
                    <h4 className="staking__title">Earnings</h4>
                </div>
                <div className="staking__column staking__column--6">
                    <h4 className="staking__title">Action</h4>
                </div>
            </div>
            }
            <ul className="staking__list">
                {stakingList.map((item, index) => {
                    return (
                        <StakingItem item={item} index={index} list={stakingList} key={index} mobileScreen={mobileScreen} />
                    );
                })}
            </ul>
            <div className="staking__faq staking__background">
                <h1 className="staking__faq-title">How to Stake?</h1>
                <Accordion className="accordion--staking" list={questions} />
            </div>
        </div>
    );
}
