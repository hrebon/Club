import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import './Home.css';
import { Container, Row,Col } from 'react-bootstrap';


const Home = () => {

    const [club, setClub] = useState([]);
    useEffect(() =>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setClub(data.teams));
    },[])

    return (

        
        
        <div className="home">

            
            <Row>
                <Col lg="12" md="10" sm="12" xs="12">
                <div className="image-tag">
                    <h1>Rocks Club</h1>    
                </div>
                </Col>
            </Row>
            

            <div className="main-container">                
                {
                    club.map(clb =>  <Club club={clb}></Club>)
                }
            </div>
        </div>
                
            

            
                   
        
    );
};

export default Home;