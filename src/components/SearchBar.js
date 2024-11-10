import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query); // Only search by the query
    }
  };

  return (
    <Form className="search-container d-flex mb-4 align-items-center">
      <Form.Control
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input me-2"
      />
      <Button onClick={handleSearch} className="search-button">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
