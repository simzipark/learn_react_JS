import React from "react"
import { HashRouter, Route } from "react-router-dom";   //or can use "BrowserRouter" rather than HashRouter
import Home from "./routes/Home"
import About from "./routes/About";
import Navigation from "./components/Navigation";

function App() {
    return (
        <HashRouter>
            {/* Link를 만든 component는 반드시 Router component 안에 있어야 함! (Navigation component는 HashRouter 안에 써야 함) */}
            <Navigation />
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/about" component={About}></Route>
        </HashRouter>
    )
}

export default App;