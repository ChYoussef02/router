
import { Navbar, Nav, FormControl, Form,Button } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import './App.css';
import './App';

const Filter= ({ handleFilter, handleAddMovie,handleRate }) => {
    return (
        <div>
            <Navbar bg="blue" expand="lg">
                <Navbar.Brand href="#">HOME</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="nav1"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#" disabled>
                            Contact 
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Navbar>
                <StarRatingComponent  className="stars" onStarClick={(nextValue, prevValue, name) => handleRate(nextValue)} />
            </Navbar>
            </div >)
}
            export default Filter
