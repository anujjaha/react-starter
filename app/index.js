import React, {Component} from "react";
import ReactDOM from "react-dom";
import { createDecipheriv } from "crypto";

class App extends Component
{
    constructor()
    {
        super();
        console.log('Hurrey !');
    }

    render(){
        return (
            <div>
                Let's Start!
            </div>
        )
    }
     
}

ReactDOM.render(<App />, document.getElementById('root'));