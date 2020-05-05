import React,{Component} from 'react';
import './SignIn.css';
class SignIn extends Component{
    render(){
        return(
            <div className="SignIn">
                <div className="Text">Sign In</div>
                <form>
                    <label>Username</label>
                    <input type="text" id="username"/>
                    <label>Password</label>
                    <input type="password" id="password"/> 
                    <div className="Radio">
                        <input type="radio"/>
                        keep me signed in
                    </div>
                    <button id="btn">Signip to Coders-x</button>

                </form>
                <div className="Forgot">
                    <a href="#" className="a">forgot username?</a>
                    <a href="#" className="a1">forgot password?</a>
                </div>
            </div>
        );
    }
}
export default SignIn;