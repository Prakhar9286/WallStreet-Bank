
import "../styles/SessionExpired.css";

export default function SessionExpired(){
    return (
 <div className="body">
  <div className="header">
    <h1>You have been logged out</h1>
  </div>
  <div className="left-header">
    <h2>Session Expired.</h2>
    <h3>Suggestions-</h3>
    <h4>For security reasons we have disabled back button</h4>
  </div>
    <button className="bottom-header">Click here to go to login page </button>
  </div>
   
    );
    }