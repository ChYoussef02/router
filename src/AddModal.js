import React, {  useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { v4 as uuidv4} from "uuid";

function Add({ handleAdd }) {
    const [show, setShow] = useState(false);
    const [newMovie, setNewMovie] = useState({
    
        name :"",
        Image:"",
        rating:1,
        description:""
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    }
    const handleSave = () => {
        handleAdd({...newMovie,id:uuidv4()})
        handleClose()
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Movie name</Form.Label>
                            <Form.Control onChange={handleChange} name="name" type="text" placeholder="Movie name" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>PostUrl</Form.Label>
                            <Form.Control onChange={handleChange} name="Image" type="text" placeholder="PostUrl" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={handleChange} name="description" type="text" placeholder="Description" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <StarRatingComponent name="" onStarClick={(nextValue,prevValue,nae)=>setNewMovie({...newMovie,rating:nextValue})} />
                    <Button variant="primary" onClick={handleSave} type="submit">
                        Submit
                    </Button>
                    <Button variant="primary" onClick={handleClose} type="close">
                        Close
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    );
}

export default Add
