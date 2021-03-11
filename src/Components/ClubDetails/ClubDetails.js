import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ClubDetailsOnebyOne from '../ClubDetailsOnebyOne/ClubDetailsOnebyOne';

const ClubDetails = () => {
    const {id} = useParams();
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setInfo(data.teams));

    }, [])
    return (
        <div>
           {
               info.map(club => <ClubDetailsOnebyOne club={club}></ClubDetailsOnebyOne>)
           }
        
        </div>
    );
};

export default ClubDetails;