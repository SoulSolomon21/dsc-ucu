import { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function NewsSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=7f9185286d7340fca3ba0cf5632db706')
      .then(response => response.json())
      .then(data =>setArticles(data.articles));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Tech News</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {articles.map(article => (
          <div className="col" key={article.url}>
            {console.log(article)}
            <Card className="h-100">
              <Card.Img variant="top" src={article.urlToImage} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Button variant="primary" data-bs-toggle="modal" data-bs-target={`#${article.title.split(' ').join('-')}`}>
                  Read More
                </Button>
              </Card.Body>
            </Card>
            <div className="modal fade" id={article.title.split(' ').join('-')} tabIndex="-1" aria-labelledby={`${article.title.split(' ').join('-')}-label`} aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id={`${article.title.split(' ').join('-')}-label`}>{article.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <img src={article.urlToImage} className="img-fluid mb-3" alt={article.title} />
                    <p>{article.content}</p>
                  </div>
                  <div className="modal-footer">
                    <a href={article.url} target="_blank" rel="noreferrer" className="btn btn-primary">Read Full Article</a>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsSection;
