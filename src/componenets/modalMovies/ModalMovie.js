import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

function ModalMovie(props) {
    const { data } = props;
    const [comment, setComment] = useState('');
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleButtonClick = () => {
        const postData = {
            "title": data.title,
            "overview": data.overview,
            "release_date": data.date,
            "poster_path": data.path,
            "comments": comment
        };
        fetch('https://movies-1zql.onrender.com/addFavMovie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        props.onHide();
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {data.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Col xs={6} md={4}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w500/${data.path}`}
                        rounded
                    />
                </Col>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            value={comment}
                            onChange={handleCommentChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleButtonClick}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ModalMovie;
