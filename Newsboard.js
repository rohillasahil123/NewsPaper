import Newsitem from "./Newsitem";
import { useEffect, useState } from 'react';

const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let api = '5240f0c0fb8e4303af6ed048fc38ba90'
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${api}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.articles && Array.isArray(data.articles)) {
          setArticles(data.articles);
        } else {
          console.error('Invalid response format:', data);
        }
      })
      .catch(error => console.error('Error fetching news:', error));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news, index) => (
        <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

export default Newsboard;
