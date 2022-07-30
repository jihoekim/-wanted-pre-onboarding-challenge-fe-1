import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import "./app.css";
import Login from "./auth/login";
import Signup from "./auth/signup";
import TodoList from "./todo/todolist";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <div className="App-intro">
                <Router>
                    <ul>
                        <li><Link to="/auth/login">로그인</Link></li>
                        <li><Link to="/auth/signup">회원가입</Link></li>
                        <li><Link to="/todo">할일</Link></li>
                    </ul>
                    <Routes>
                    <Route exact path='/auth/login' element={<Login />}></Route>
                    <Route exact path='/auth/signup' element={<Signup />}></Route>
                    <Route exact path='/todo' element={<TodoList />}></Route>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;