import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

function Header() {
    return (
        // <div className="flex items-center justify-between px-4 border-b h-14">
        <section className="hero is-danger is-small" >
            <div className="header hero-body">
                <Link to="/" className="header-text subtitle">Marvel TTRPG</Link>
                <div className="search-bar">
                    <SearchInput />
                </div>
                
            </div>
        </section>
    );
}

export default Header;