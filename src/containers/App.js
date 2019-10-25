import React, {Component} from 'react';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Robot from './Robot/Robot';

class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
        .catch(err => err);
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return (
            robot.email.toLowerCase().includes(searchfield.toLowerCase()) ||
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
            );
        })

        const roboFriends = (
            robots.length === 0 ? <h1>Loading...</h1> : 
            (
                <>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} clicked={this.onClickHandler}/>
                    </Scroll>
                </>
            )
        )

        return (
            <div className='tc'>
                <h1 className='f1'>Robofriends</h1>
                <nav className="nav-link">
                    <NavLink to="/robots/" className='f1'>Robots</NavLink>
                </nav>
                <Switch>
                    <Route path="/robots/" render={() => roboFriends}/>
                    <Route path={'/robot/:id'} component={Robot} />
                    <Redirect from="/" to="/robots/" />
                </Switch>
            </div>
        );
    }
}

export default App;

