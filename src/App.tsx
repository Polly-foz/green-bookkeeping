import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/details">明细</Link>
                        </li>
                        <li>
                            <Link to="/statistics">统计</Link>
                        </li>
                        <li>
                            <Link to="/settings">设置</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/details">
                        <Details/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    <Route path="/settings">
                        <Settings/>
                    </Route>
                    <Redirect exact from="/" to="/details"/>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Settings() {
    return <h2>Settings</h2>;
}

function Details() {
    return <h2>Details</h2>;
}

function Statistics() {
    return <h2>Statistics</h2>;
}

function NoMatch(){
    return <h2>404</h2>
}
