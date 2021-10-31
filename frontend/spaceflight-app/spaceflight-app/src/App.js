import logo from "./logo.svg";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GetNews from "./components/GetNews";
import NewsInfo from "./components/NewsInfo";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route path="/articles" exact component={GetNews} />
                    <Route path="/articles/:id" component={NewsInfo} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
