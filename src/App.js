import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async (query) => {
    setLoading(true);
    setError(null);
    const url = `https://openlibrary.org/search.json?title=${query}`; // Default search by title
  
    try {
      const response = await axios.get(url);
      setBooks(response.data.docs);
    } catch (err) {
      setError('Failed to fetch books. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Container className="my-5">
      <h1 className="text-center">Book Finder</h1>
      <SearchBar onSearch={fetchBooks} />
      {error && <p className="text-danger text-center">{error}</p>}
      {loading ? (
        <div className="text-center my-5"><Spinner animation="border" /></div>
      ) : (
        <BookList books={books} />
      )}
    </Container>
  );
};

export default App;
