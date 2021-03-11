import { List } from 'rc-field-form';
import React from 'react';
import { Card, Button,Container,Row,Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Club.css';


const Club = (props) => {

    const {strTeam,strTeamBadge,idTeam } = props.club;
    console.log(props.club);

    const history = useHistory();
    const exploreHandler = id => {
        const url = `explore/${id}`;
        history.push(url);
    }
    
    return (
            
        <div className="club">
            <Card className="card">
                 <Card.Img variant="top" className="mt-5" src={strTeamBadge} />
                 <Card.Body>
                     <Card.Title>{strTeam}</Card.Title>
                     <Card.Text>
                         Sports type: Football
                     </Card.Text>
                     <Button onClick={() => exploreHandler(idTeam)} variant="primary">Explore</Button>
                 </Card.Body>
             </Card>
            
        </div>
    );
}

export default Club;