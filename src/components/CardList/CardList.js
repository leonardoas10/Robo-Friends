import React from 'react';
import Card from './Card/Card';
import { Link } from 'react-router-dom';

const CardList = ({robots, clicked, match}) => {
    return (
        <div>
            {
            robots.map((user, i) => {
                return (
                    <Link className="no-underline light-purple" to={'/robot/' + robots[i].id} key = {i} >
                        <Card 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    </Link>
                    );
                })      
            }
        </div>
    );
}

export default CardList;