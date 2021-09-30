import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import News from './Components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d98f7a6f44984581a7a8c2eaef8e3444')
      .then(res => res.json())
    .then(data=>setNews(data.articles))
  },[])
  return (
    <div className="App">
      {
        news.length === 0 ?
          <Spinner animation="border" />
          :
          <Row xs={2} md={3} className="g-4">
          {
            news.map(nw=><News news={nw}></News>)
          }
        </Row>
      }
    </div>  
  );
}
export default App;
