import React , {Component} from 'react';

class Application extends Component {


    state = {
        age : 21
    }

    onAgeUp = ()=> {
        const newState= this.state;
        newState.age++;
        this.setState(newState);

    }
    onAgeDown = ()=> {
        const newState= this.state;
        newState.age--;
        this.setState(newState);

    }

    render(){
        return (
            <div className="App">

            {this.state.age}
            <br></br>
            <button onClick={this.onAgeUp} >Click Up</button>
            <button onClick={this.onAgeDown} >Click Down</button>
    
        </div>
        )
    }

}

export default Application;