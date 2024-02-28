import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useEffect } from 'react';
function FavList() {
    const [ApiData, setAPIData] = useState([]);
    const [comments, setComments] = useState({});

    const handleCommentChange = (id, event) => {
        setComments({
            ...comments,
            [id]: event.target.value
        });
    };
    const update = async (item) => {
        const postData = {
            "comments": comments[item.id]
        };
        console.log(item);
        fetch(`https://movies-1zql.onrender.com/update/${item.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
            credentials: 'include',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Response:', item);
            })
            .catch(error => {
                console.error('Error:', item);
            });
    }
    const getAPIData = async () => {
        const serverURL = `https://movies-1zql.onrender.com/favorite`;
        const res = await fetch(serverURL, { method: "GET" });
        const result = await res.json()
        setAPIData(result)
    }
    useEffect(() => {
        getAPIData();
    }, [ApiData])

    const deleteItem = async (id) => {
        const serverURL = `https://movies-1zql.onrender.com/deleteFavMovie/${id}`;
        await fetch(serverURL, { method: "GET" });
    }
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {ApiData.map((item) => {
                    return <Col key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    {item.comments}
                                </Card.Text>
                                <Form >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={5}
                                            value={comments[item.id]}
                                            onChange={(event) => handleCommentChange(item.id, event)}
                                        />
                                    </Form.Group>
                                </Form>
                                <Button variant="primary" onClick={() => { update(item) }}>Update</Button>
                                <Button variant="danger" onClick={() => { deleteItem(item.id) }}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </>
    )
}
export default FavList;