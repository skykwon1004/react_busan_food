import { Link } from "react-router-dom";
import Nav from "./Nav";

const Header = ({ gugun }) => {
    return (
        <header className="header">
            <div className="header_wrap">
                <h1>
                    <Link to='/'>부산맛집지도</Link>
                </h1>
                <p>우리 동네 맛집을 한번에 볼 수 있습니다.</p>
                <Nav gugun={gugun} />
            </div>
        </header >
    )
}

export default Header;