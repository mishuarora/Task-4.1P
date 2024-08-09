// src/App.js
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import FeaturedArticles from './FeaturedArticles';
import FeaturedTutorials from './FeaturedTutorials';
import Footer from './Footer';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container textAlign="center">
      <Header />
      <h2>Featured Articles</h2>
      <FeaturedArticles />
      <h2>Featured Tutorials</h2>
      <FeaturedTutorials />
      <Footer />
    </Container>
  );
}

export default App;
