import React from 'react'
import {Link,withRouter} from 'react-router-dom'

function MovieDec(props) {
    let id = props.match.params.id;
    let film = props.movies.find((film)=>film.id==id)
   
    return (
        <div>
            <Link to='/'>Home</Link>
            <h1 style={{color:'white'}}>{film.name}</h1>
            <h3 style={{color:'white'}}>{film.Description}</h3>

            <h1 style={{color:'black'}}>Watch video</h1>
            <iframe width="500" height="300" src={film.mylink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>
    )
}

export default withRouter(MovieDec)