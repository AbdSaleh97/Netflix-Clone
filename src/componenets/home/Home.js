import './Home.css';
import { useEffect, useState } from 'react';
import MovieList from '../moviesList/MovieList.js';
import Header from '../Header/Header.js';

function Home() {
  const [jsonData, setJsonData] = useState([]);
  const PORT = process.env.REACT_APP_PORT || 300;
  const req = async () => {
    let url = `http://localhost:${PORT}/trending`
    const res = await fetch(url);
    const jsonRes = await res.json();
    setJsonData(jsonRes);
  };

  useEffect(() => {
    req();
  }, []);
  console.log(jsonData);

  return (
    <>
      <Header />
      <MovieList data={jsonData} />
      {/* <h1> hello</h1> */}
    </>
  );
}
export default Home;
