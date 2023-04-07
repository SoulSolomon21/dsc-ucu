import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

function LatestNews() {
    const [showModal, setShowModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?limit=6')
            .then(response => response.json())
            .then(data => {
                setArticles([
                    {
                        id: 1,
                        title: 'New Coding Club Website Launch',
                        description: 'We are excited to announce the launch of our new website!',
                        imageUrl: data[0].download_url,
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, ipsum a pulvinar pharetra, odio risus efficitur arcu, nec posuere risus velit eget nulla. Proin dictum, nulla eu molestie malesuada, arcu lacus luctus sapien, id euismod odio enim vitae purus.',
                    },
                    {
                        id: 2,
                        title: 'Coding Competition Results Announced',
                        description: 'Congratulations to the winners of our coding competition!',
                        imageUrl: data[1].download_url,
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, ipsum a pulvinar pharetra, odio risus efficitur arcu, nec posuere risus velit eget nulla. Proin dictum, nulla eu molestie malesuada, arcu lacus luctus sapien, id euismod odio enim vitae purus.',
                    },
                    {
                        id: 3,
                        title: 'Web Development Workshop Recap',
                        description: 'Check out the highlights from our latest web development workshop!',
                        imageUrl: data[2].download_url,
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, ipsum a pulvinar pharetra, odio risus efficitur arcu, nec posuere risus velit eget nulla. Proin dictum, nulla eu molestie malesuada, arcu lacus luctus sapien, id euismod odio enim vitae purus.',
                    },
                    {
                        id: 4,
                        title: 'Tech Talk: Introduction to Artificial Intelligence',
                        description: 'Learn about the basics of artificial intelligence in our latest tech talk!',
                        imageUrl: data[3].download_url,
                        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, ipsum a pulvinar pharetra, odio risus efficitur arcu, nec posuere risus velit eget nulla. Proin dictum, nulla eu molestie malesuada, arcu lacus luctus sapien, id euismod odio enim vitae purus.',
                    },])
            }
            )
    }, [])

    function handleArticleClick(article) {
        setSelectedArticle(article);
        setShowModal(true);
    }

    function handleModalClose() {
        setShowModal(false);
        setSelectedArticle(null);
    }

    return (
        <div className="latest-news">
            <h2>Latest News</h2>
            <div className="row">
                <div className="col-lg-12 mb-3 d-flex flex-row overflow-auto">
                    {articles.map((article) => (
                        <Card key={article.id} className="light-card mr-3">
                            <Card.Img variant="top" src={article.imageUrl} />
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>{article.description}</Card.Text>
                                <Button variant="primary" onClick={() => handleArticleClick(article)}>Read More</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <Modal show={showModal} onHide={handleModalClose} centered className="modal-blur">
                <Modal.Header closeButton>
                    <Modal.Title>{selectedArticle && selectedArticle.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedArticle && (
                        <div>
                            <img src={selectedArticle.imageUrl} alt={selectedArticle.title} className="w-100 mb-3" />
                            <p>{selectedArticle.content}</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default LatestNews;
