import './header.css'


function Header({admin}) {
    return ( 
            <div className="containerr">
                <div className="menu_main">
                    <div>
                        <h2>2H Store</h2>
                    </div>
                    <div className="menu_right">
                        <div className="menu_page">
                            <ul>
                                <li><a>{admin}</a></li>
                                <li><a>Shop</a></li>
                                <li><a>About us</a></li>
                                <li><a>Services</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Contact us</a></li>
                            </ul>
                        </div>
                        <div className="menu_login_cart">
                            <a><i class="fas fa-user"></i></a>
                            <a><i class="fas fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>

     );
}

export default Header;