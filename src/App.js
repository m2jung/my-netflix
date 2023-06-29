import { useState } from 'react';
import { useEffect } from 'react'; 
import Movie from './components/Movie'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home'
import Detail from './routes/Detail';

//router-dom 6부터 Switch->Routes 변경,element prop에 컴포넌트 할당  https://reactrouter.com/docs/en/v6/getting-started/overview

//App.js 는 새로운 URL에 지정 된 Components들을 render한다.
function App() {
  return(
    <Router>
      <Routes>
        {/* :id 값에 따라 페이지 이동, :id라는 변수로 useParam을 통해 넘겨 받는다. */}
        <Route path="/movie/:id" element={<Detail />} />
        {/* 메인 Home 페이지 */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
