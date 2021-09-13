import { Navbar, Nav, FormControl, Form,Button } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import './App.css';
import './App';

const Filter= ({ handleFilter,handleRate }) => {
    return (
        <div>
            <Navbar bg="blue" expand="lg">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="nav1"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                     
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            onChange={(e)=>handleFilter(e.target.value)}

                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Navbar>
                <StarRatingComponent  emptyStarColor = " white" className="stars" onStarClick={(nextValue, prevValue, name) => handleRate(nextValue)} />
            </Navbar>
            </div >)
}
            export default Filter