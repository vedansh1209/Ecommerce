const navbar = () => {
    return (
        <div>
            <nav className="container">
                <div className="logo">
                    <img src="/images/logo.png" alt="logo was here"/>
                </div>
                <ul>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button>LOGIN</button>
            </nav>
        </div>
    );

};

export default navbar;
