const navbar = () => {
    return (
        <div>
            <nav className="container">
                <div className="logo">
                    <img src="/images/watchlogo.svg" alt="logo was here" style={{ width: '60px' }} />
                </div>
                <ul>
                    <li><a href="/">Menu</a></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <button>LOGIN</button>
            </nav>
        </div>
    );

};

export default navbar;
