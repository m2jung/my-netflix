import { useState } from 'react';
import { useEffect } from 'react'; 
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  
  //API 데이터 json 형태로 가지고와 state에 저장하기 
  const getMovies = async() => {
    const json = await(
      await fetch (
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  //한번만 getMovies()함수 실행
  useEffect(() => {
    getMovies();
  },[]);
  console.log(movies);


  return (
    <div>
    {loading ? (
    <h1>Loading..</h1>
    ) : (
    <div>
      {movies.map((movie)=> (
        <Movie 
          key={movie.id}        
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}
          genres={movie.genres}
        />
      ))}  
    </div>
    )}
  </div>
)}
export default Home;
