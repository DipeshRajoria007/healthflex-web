import React, { useState, useEffect } from "react";
import { URL } from "../../utils/constants";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${URL}/api/books`);
        const data = await response.json();
        console.log(data);
        setBooks(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);
  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="flex flex-wrap gap-8">
        {books.map((book) => (
          <div key={book?._id} className="bg-blue-900 h-96 w-64 rounded-md p-8">
            <h2> Book Name : {book?.BookName}</h2>
            <p> No. of books Available : {book?.NumberOfCopies}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
