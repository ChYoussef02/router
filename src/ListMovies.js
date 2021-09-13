import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import {Card} from "react-bootstrap"
import {Link} from 'react-router-dom'
import Button from '@restart/ui/esm/Button'


const ListMovies =(props) => {
    return  <div className ="listMovies">
      { props.movie.map((el) => (
       <div className="Movie">
           <Card style={{width : "18rem"}}>
          <Card.Img variant="top" src={el.image}/>
          <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>{el.Description}</Card.Text>
              <StarRatingComponent value={el.rating}/>
              <Button variant="link"><Link to={`/description/${film.id}`}>Description</Link></Button>

        </Card.Body>
    </Card>
       </div>
      ))}
    </div>
        
 
}
export default ListMovies