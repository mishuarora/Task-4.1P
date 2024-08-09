// src/FeaturedArticles.js
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function FeaturedArticles() {
  const articles = [
    {
      title: 'Exploring the Campus Life at Deakin',
      description: 'Experience the vibrant campus life with numerous events and activities.',
      image: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png' 
    },
    {
      title: 'Innovative Research at Deakin',
      description: 'Learn about groundbreaking research happening at Deakin University.',
      image: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png'
    },
    {
      title: 'Student Success Stories',
      description: 'Discover how Deakin students achieve success in their respective fields.',
      image: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png' 
    }
  ];

  return (
    <Card.Group centered>
      {articles.map((article, index) => (
        <Card key={index}>
          <Image src={article.image} />
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Description>{article.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

export default FeaturedArticles;
