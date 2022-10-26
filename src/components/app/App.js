import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPage} from '../pages'; // для уменьшения количества кода мы создали отдельный файл со страницами

const App = () => { 
        return (
            <Router>
                <div className="app">
                    <AppHeader/>
                    <main>
                        <Switch>
                            <Route path="/comics">
                                <ComicsPage/>
                            </Route>
                            <Route path="/">
                                <MainPage/>
                            </Route>
                        </Switch>
                    </main>
                </div>
            </Router>
        )
}

export default App;