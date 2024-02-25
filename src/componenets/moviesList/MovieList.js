import Movie from "../Movie/Movie";
import Row from 'react-bootstrap/Row';
function MovieList(props) {
  const { data } = props;

  return (
    <>
      <Row xs={1} md={4} className="g-4">
      {data.map(el => (
        <Movie data={el} />
      ))}
    </Row>
      
    </>
  );
}

export default MovieList;
