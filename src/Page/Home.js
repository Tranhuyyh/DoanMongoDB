import homeImg from "../Images/couch.png";
import './home.css';
import list1 from "../Images/product-1.png";


function Home() {
    return (
        <div className="">
            <div>
                <div className="top">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="top_left col-lg-5">
                                <h1>Modern interior <span className="d-block">Design Studio</span></h1>
                                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                                <button className="btn btn-warning btn1">Shop Now</button>
                                <button className="btn2">Explore</button>
                            </div>
                            <div className="top_right col-lg-7">
                                <img src={homeImg} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Main">
                    <div className=" row list">
                        <div className="col-3">
                            <h2 className=" ">Crafted with excellent material.</h2>
                            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                            <button className="explore btn-dark"> <b>Explore</b></button>
                        </div>
                        <div className="col-3 main_right"><a> <img className="home_product" src={list1} />
                        <p className="p">Nordic Chair <b className="d-block">$50</b></p></a>
                        </div>
                        <div className="col-3 main_right"><a> <img className="home_product" src={list1} />
                        <p className="p">Nordic Chair <b className="d-block">$50</b></p></a>
                        </div>
                        <div className="col-3 main_right"><a> <img className="home_product" src={list1} />
                        <p className="p">Nordic Chair <b className="d-block">$50</b></p></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Home;