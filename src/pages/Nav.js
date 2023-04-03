import { Link } from "react-router-dom";
// import styled from "styled-components";

const Nav = ({ gugun }) => {
    return (
        <nav className="gnb">
            <ul>
                {
                    gugun.map((it, idx) => <li key={idx}>
                        <Link to={`/${it}`}>{it}</Link>
                    </li>)
                }
            </ul>
        </nav>
    )
}

export default Nav;