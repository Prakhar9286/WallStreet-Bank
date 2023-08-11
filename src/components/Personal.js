import React, {Component} from "react";

class Personal extends Component{
    render(){
        return(
            <div>
                <h1> Hello this is Personal account </h1>
                <p> A class component must include the extends React.Component statement. This statement creates an inheritance to 
                    React.Component, and gives your component access to React.Component's functions. The component also requires a 
                    method, this method returns HTML.
                </p>    
            </div>
        );
    }
}

export default Personal;