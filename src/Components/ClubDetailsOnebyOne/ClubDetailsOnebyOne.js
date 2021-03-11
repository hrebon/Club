import React from 'react';
import './ClubDetailsOnebyOne.css';
import image from '../../team-tracker-main/Photo/male.png';
import image2 from '../../team-tracker-main/Photo/female.png';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import logo1 from '../../team-tracker-main/Icon/Facebook.png';
import logo2 from '../../team-tracker-main/Icon/Twitter.png';
import logo3 from '../../team-tracker-main/Icon/YouTube.png';


const ClubDetailsOnebyOne = (props) => {
    const {strCountry,intFormedYear,strGender,strTeamBanner,strTeam } = props.club;
    
    const gender = strGender;
    let gender2;
    console.log(gender);
    if(gender == 'Male'){
        gender2 = <img src={image} alt=""/>
    }
    else{
        gender2 = <img src={image2} alt=""/>
    }
    return (
        <div>

            
                <Row>
                    <Col lg="12" md="10" sm="12" xs="12">
                    <div className="banner">
                        <img src={strTeamBanner} alt=""/>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="12" md="10" sm="12" xs="12">
                    <div className="box container-xs">
                        <div className="text">
                                <h2>{strTeam}</h2>
                                <h5>Founded: {intFormedYear}</h5>
                                <h5>Country: {strCountry}</h5>
                                <h5>Sports Type: Football</h5>
                                <h5>Gender: {strGender}</h5>
                        </div>
                        <div className="image-box">
                                {gender2}
                        </div>
                    </div>
                    <div className="details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quisquam. Beatae omnis quae deserunt reprehenderit amet veniam quasi delectus dolorum praesentium, rerum iste, dolor nemo necessitatibus facere Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis molestiae, tempore quidem distinctio dolorum mollitia laboriosam. Itaque magnam odio blanditiis! </p>
                        <br/>
                        <br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam dolores rerum quod recusandae! Porro assumenda nam, neque quae et tenetur nemo officia accusamus molestiae consequuntur hic deserunt aut impedit quo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maiores fuga maxime distinctio sint molestiae aliquam nam. Consectetur, aliquam deleniti?</p>
                        <div className="d-flex justify-content-center">
                        <img src={logo1} alt=""/>
                        <img src={logo2} alt=""/>
                        <img src={logo3} alt=""/> 
                        </div> 
                    </div>
                    </Col>
                </Row>
        </div>
    );
};

export default ClubDetailsOnebyOne;