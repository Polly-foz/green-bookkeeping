import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  height: 100vh;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  border: 1px solid red;
  flex-grow:1;
  overflow: auto;
`;
const Nav = styled.nav`
  border: 1px solid green;
  & > ul{
      display: flex;
      justify-content: space-around;
      > li{
        border:1px solid blue;
        width: 33.3%;
        text-align: center;
        padding: 16px;
      }
  }
`;


export default function App() {
    return (
        <Wrapper>
            <Router>
                <Main>
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
                            <NoMatch/>
                        </Route>
                    </Switch>

                </Main>
                <Nav>
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
                </Nav>
            </Router>
        </Wrapper>

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

function NoMatch() {
    return <h2>404</h2>;
}
