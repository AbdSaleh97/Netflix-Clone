import './Home.css';
import { useEffect, useState } from 'react';
import MovieList from '../moviesList/MovieList.js';


function Home() {
  const [jsonData, setJsonData] = useState([]);
  const req = async () => {
    let url = `https://movies-1zql.onrender.com/trending`
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
      <MovieList data={jsonData} />
    </>
  );
}
export default Home;
