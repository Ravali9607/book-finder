import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './BookList.css';

const BookList = ({ books }) => {
  return (
    <Row className="my-4">
      {books.length > 0 ? (
        books.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.key} className="mb-4">
            <Card className="book-card h-100 d-flex flex-column">
              <Card.Img
                variant="top"
                src={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : 'path/to/placeholder-image.jpg'}
                alt={book.cover_i ? book.title : 'Image not available'}
                className="book-card-image"
              />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="book-card-title">{book.title}</Card.Title>
                <Card.Subtitle className="text-muted">{book.author_name?.[0]}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <p className="text-center w-100">No books found</p>
      )}
    </Row>
  );
};

export default BookList;
