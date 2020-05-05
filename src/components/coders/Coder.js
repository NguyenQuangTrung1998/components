import React, {Component} from 'react';
import './Coder.css';
class Coder extends Component{
    render(){
        return(
            <div className="Coder">
                <div className="Back">
                    <a href="#">Back</a>
                </div>
                <div className="CoderX">
                  CoderX  
                </div>
                <div className="Signup">
                    <a href="#">Sign up</a>
                </div>
            </div>
        );
    }
}
export default Coder;