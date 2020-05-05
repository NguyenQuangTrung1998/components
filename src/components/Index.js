import React,{Component} from 'react';
import './Index.css';
import Coder from './coders/Coder.js';
import SignIn from './signin/SignIn.js';
class Index extends Component{
    render(){
        return(
            <div className="Index">
                <Coder />
                <SignIn />
            </div>
        );
    }
    
}
export default Index;