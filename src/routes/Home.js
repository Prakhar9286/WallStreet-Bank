import React from "react";
// import {useNavigate} from 'react-router-dom';
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import "../homeComponents/homeComponents.css";
// import HomeBoxes from "../homeComponents/HomeBoxes";
import "../App.css";

export default function Home(){
    // const [noAccount, setAccount] = useState('Home');
    // const [account, setnetBanking] = useState('Home');

    // const newRegister = () => {
    //     setAccount('Register');
    // }

    // const Account = () => {
    //     setnetBanking('netBanking');
    // }

    // const navigate = useNavigate();

    // const navigateToContacts = () => {
    //     navigate('/Register');
    // };

    // const navigateHome = () => {
    //     navigate('/netBanking');
    // };


    return (
        <div className="home">
            <h1 className="intro">Welcome to WallStreet</h1>
            {/* <HomeBoxes t1="Open Zero Balance Account" t2="Apply for Credit Card" t3="Whatsapp Banking" t4="NetBanking" t5="Low interest Loans"/> */}
            <div className="mainBox">
            <div className="accinfo1">
                <Link className="h51" to="/register">Open Zero Balance Account</Link>
                <Link className="h52" to="/login">Apply for Credit Card</Link>
                <Link className="h53" to="/login">Whatsapp Banking</Link>
                <Link className="h54" to="/login">NetBanking</Link>
                <Link className="h55" to="/login">Low interest Loans</Link>
            </div>

            <div className="accinfo1">
                <Link className="h51" to="/login">Kanya Samruddhi Yojna</Link>
                <Link className="h52" to="/login">Atal Pension Yojna</Link>
                <Link className="h53" to="/login">Open a NPS Account</Link>
                <Link className="h54" to="/login">Life After Retirement</Link>
                <Link className="h55" to="/login">EPF Account Information</Link>
            </div>

            <div className="accinfo1">
                <Link className="h51" to="/login">Fixed Deposit</Link>
                <Link className="h52" to="/login">Recurring Deposit</Link>
                <Link className="h53" to="/login">Start Your SIP</Link>
                <Link className="h54" to="/login">Planned Investments</Link>
                <Link className="h55" to="/login">Soverign Gold Bonds</Link>
            </div>
            </div>
        
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
        
                
        </div>
    );
}