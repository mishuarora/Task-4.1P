// src/FeaturedTutorials.js
import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function FeaturedTutorials() {
  const tutorials = [
    {
      title: 'Getting Started with Deakin\'s Online Portal',
      description: 'A step-by-step guide to navigating Deakin\'s student portal.',
      image: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png' 
    },
    {
      title: 'Maximizing Your Study Time',
      description: 'Learn tips and tricks to make the most out of your study sessions.',
      image: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png' 
    },
    {
      title: 'Connecting with Professors and Peers',
      description: 'Effective ways to communicate and collaborate within Deakin University.',
      image: 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png' 
    }
  ];

  return (
    <Card.Group centered>
      {tutorials.map((tutorial, index) => (
        <Card key={index}>
          <Image src={tutorial.image} />
          <Card.Content>
            <Card.Header>{tutorial.title}</Card.Header>
            <Card.Description>{tutorial.description}</Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

export default FeaturedTutorials;
