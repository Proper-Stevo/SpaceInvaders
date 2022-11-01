import React from "react";
import Card from 'react-bootstrap/Card';
import { useQuery } from '@apollo/client';
import { QUERY_PLANET } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import moonImg from '../../assets/images/moon-img.png';
// import data for moons


// In our return method, we use the map method to return a new array 
export default function Moons() {
    // for each mooon return a card 

    const { planetname } = useParams()
    const upper = planetname.toUpperCase();

    const { loading, data } = useQuery(QUERY_PLANET, {
        variables: { name: `${planetname}` }
    });

    const getPlanet = data?.planet || {};

    if (loading) {
        return <h2>LOADING...</h2>
    }

    return (
        <div className="moon-container my-5" style={{margin:"auto"}}>
            <h3 style={{fontSize: "30px", fontWeight:"500", padding:"0px", color:"#e8ecf1", backgroundColor:"rgba(218, 223, 225, .6)", padding:"5px", width:"fit-content", borderRadius:"5px"}}>{upper}'S MOONS</h3>
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 planet-moons-only">
            {getPlanet.moons.map((moon, index) => {
                return (
                    <Card className="text-white mx-5 my-4 moon-display col" key={index}  style={{width:"175px", background:"none"}} >
                        <Card.Img className="moon-img" src={moonImg} alt="Card image"/>
                            <Card.Title className='moon-name' style={{ textTransform: 'uppercase', borderRadius:"5px"}}>{moon}</Card.Title>
                    </Card>
                );
            })} 
            </div>
        </div>
    );
}
