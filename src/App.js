import Header from './components/Header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import Swap from './components/Swap';
import Liquidity from './components/Liquidity';

function App() {

    return (
        <>
            <Header />
            <Switch>
                <Redirect path="/" to="/swap" exact />
                <Route path="/swap" exact>
                    <Swap />
                </Route>
                <Route path="/liquidity" exact>
                    <Liquidity />
                </Route>
            </Switch>
        </>
    );
}

export default App;