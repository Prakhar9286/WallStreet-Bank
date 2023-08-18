import React from "react";
import {useNavigate} from 'react-router-dom';

export default function Home(){
    // const [noAccount, setAccount] = useState('/Home');
    // // const [account, setnetBanking] = useState('/Home');

    // const newRegister = () => {
    //     setAccount('Register');
    // }

    // // const Account = () => {
    // //     setnetBanking('/netBanking');
    // // }

    const navigate = useNavigate();

    const navigateToContacts = () => {
        navigate('/Register');
    };

    const navigateHome = () => {
        navigate('/netBanking');
    };


    return (
        <div className="home">
        <h1 className="intro">Welcome to WallStreet</h1>
        {/* <img src="images/img1.jpg" classNameName="img1" alt="Banking Solutions"/> */}
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="/images/creditcard.png" className="img12" alt="Credit card Advertisement"/>
            <div className="carousel-caption d-none d-md-block">
                <h5 className="textcarousal">Lifetime free credit Card</h5>
            </div>
            </div>
            <div className="carousel-item">
            <img src="/images/loanimage.png" className="img12" alt="Home Loans"/>
            <div className="carousel-caption d-none d-md-block">
                <h5 className="textcarousal">Low interest loans</h5>
            </div>
            </div>
            <div className="carousel-item">
            <img src="/images/payhasslefree.png" className="img12" alt="Credit Card"/>
            <div className="carousel-caption d-none d-md-block">
                <h5 className="textcarousal">Pay Hassle free loans</h5>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
        
        <div className="box-container">
            <button type="button" className="box1" onClick={navigateToContacts}>Are You a new User!</button>
            <button type="button" className="box2" onClick={navigateHome}>Are You an Existing User!</button>
        </div>
        </div>
    );
}