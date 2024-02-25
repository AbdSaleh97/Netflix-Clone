// import ModalMovie from '../modalMovies/ModalMovie.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ModalMovie from '../modalMovies/ModalMovie';


function Movie(props) {
  const [modalShow, setModalShow] = useState(false)
const {data} = props;
  const renderModalMovie = () => {
    setModalShow(true);
  }
  return (
    <>
      <Col >
        <Card key={data.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.path} `} alt={`${data.title} movie image`} />
          <Card.Body>
            <h1>{data.title}</h1>
            <Card.Title>Title: {data.title}</Card.Title>
            <Card.Text>Overview: {data.overview}</Card.Text>
            <Button variant="primary" onClick={renderModalMovie}>Add to Fav</Button>
            <ModalMovie show={modalShow} onHide={() => setModalShow(false)} data={data} />;
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
export default Movie;