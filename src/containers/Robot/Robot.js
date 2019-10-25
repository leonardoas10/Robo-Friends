import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './Robot.css';

class Robot extends Component  {
    state = {
        robot: ''
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
        .then(response => response.json())
        .then(user => {this.setState({robot: user})})
        .catch(err => err);
    }

    render () {
        console.log(this.state.robot);
        const robot = (
            this.state.robot === '' ? <h1>Loading...</h1> : 
            (
                <>
                    <div className='card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                        <img className="robot-image" alt='robots'src={`https://robohash.org/${this.props.match.params.id}test?200x200`} />
                        <img className="robot-image-two" alt='robots'src={`https://robohash.org/${this.props.match.params.id}test?200x200`} />
                        <div>
                            <h2 className="rotate">{this.state.robot.name}</h2>
                            <p className="rotatetwo">{this.state.robot.email}</p>
                        </div>
                    </div>
                    <div className="animation tc w-20 bg-light-green br3 pa2 ma2 grow bw4 shadow-5">
                        <span>I'm {this.state.robot.name}, nice to meet you!!!</span>
                    </div>
                    <div className="animationtwo tc w-20 bg-light-green br3 pa2 ma2 grow bw4 shadow-5">
                        <span>I live at {this.state.robot.address.street} Street, is awesome there!</span>
                    </div>
                    <div className="animationtwo tc w-20 bg-light-green br3 pa2 ma2 grow bw4 shadow-5">
                        <span>I live at {this.state.robot.address.street} Street, is awesome there!</span>
                    </div>
                    <div className="animationthree tc w-20 bg-light-green br3 pa2 ma2 grow bw4 shadow-5">
                        <span>If you want, send me a email to {this.state.robot.email}</span>
                    </div>
                </>
            )
        )

        return (
            <>
                {robot}
            </>
        );
    }
}

export default withRouter(Robot);