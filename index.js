// src/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import FeaturedArticles from './FeaturedArticles';
import FeaturedTutorials from './FeaturedTutorials';
import Footer from './Footer';

ReactDOM.render(<App />, document.getElementById('root')); // Render the App component into the root div in index.html

function App() {
  console.log("App component rendered"); 
  return (
    <div>
      <Header />
      <h2>Featured Articles</h2>
      <FeaturedArticles />
      <h2>Featured Tutorials</h2>
      <FeaturedTutorials />
      <Footer />
    </div>
  );
}

export default App;

