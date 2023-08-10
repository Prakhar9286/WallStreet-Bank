import React, {Component} from "react";

class Header extends Component{
    render(){
        return(
            <div>
                <h1> Hello from Header </h1>
                <p> A class component must include the extends React.Component statement. This statement creates an inheritance to 
                    React.Component, and gives your component access to React.Component's functions. The component also requires a 
                    method, this method returns HTML.
                </p>    
            </div>
        );
    }
}

export default Header;