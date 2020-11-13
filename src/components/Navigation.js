import React from "react"
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <div>
            {/* <a> tag를 사용하면 페이지를 refresh해버리기 때문에, Link 사용해야 함 */}
            {/* <a href="/about">About</a> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div >
    )
}

export default Navigation;