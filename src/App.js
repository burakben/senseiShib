import Header from './components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Swap from './components/Swap';
import Liquidity from './components/Liquidity';
import { useState } from 'react';
import ConnectPopup from './components/ConnectPopup';
import Allocation from './components/Allocation/Allocation';

function App() {
    const [popupShow, setPopupShow] = useState(false);

    return (
        <>
            <Header popupShow={popupShow} setPopupShow={setPopupShow} />
            <main className="main">
                <Switch>
                    <Redirect path="/" to="/swap" exact />
                    <Route path="/swap" exact>
                        <Swap />
                    </Route>
                    <Route path="/liquidity" exact>
                        <Liquidity />
                    </Route>
                    <Route path="/allocation" exact>
                        <Allocation />
                    </Route>
                </Switch>
            </main>
            <ConnectPopup popupShow={popupShow} setPopupShow={setPopupShow} />
        </>
    );
}

export default App;