import { useState } from "react";

export function SelectedBookFixed() {
  // prettier-ignore
  const [books, setBooks] = useState([{ id: 0, title: 'The Hobbit', read: 0, }, { id: 1, title: 'Star wars', read: 0, },
    {
      id: 2,
      title: 'Ulysses',
      read: 0,
    },
  ]);

  // Deriven state
  const [selectedBookId, setSelectedBookId] = useState(null);
  const selectedBook = books.find((book) => book.id === selectedBookId);

  const selectBook = (book) => {
    setSelectedBookId(book.id);
  };

  const readBook = (book) => {
    setBooks((current) =>
      current.map((b) => {
        if (b.id === book.id) {
          return {
            ...b,
            read: b.read + 1,
          };
        }
        return b;
      })
    );
  };

  return (
    <div className="app">
      <div>
        <h2>Selected Book</h2>
        {selectedBook ? (
          <Book selected book={selectedBook} />
        ) : (
          "No book selected"
        )}
      </div>
      <div className="books">
        <h2>Book list</h2>
        {books.map((book) => (
          <Book
            book={book}
            key={book.id}
            onRead={() => readBook(book)}
            onSelect={() => selectBook(book)}
          />
        ))}
      </div>
    </div>
  );
}

const Book = ({ book, onRead, onSelect, selected }) => (
  <div className={"book" + (selected ? " s" : "")} key={book.id}>
    <div>
      <h2>{book.title}</h2>
      <p>Read {book.read} times</p>
    </div>
    <div>
      {onSelect && <button onClick={() => onSelect()}>Select</button>}
      {onRead && <button onClick={() => onRead()}>Read</button>}
    </div>
  </div>
);
