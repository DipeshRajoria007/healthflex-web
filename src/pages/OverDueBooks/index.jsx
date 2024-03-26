import React, { useEffect, useState } from "react";
import { URL } from "../../utils/constants";

const OverDueBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${URL}/api/circulation/overdue-books`);
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
    <div className="w-full min-h-full p-12 ">
      <div className="flex flex-col text-center">
        <h1>OverDue Books</h1>
        <div className="mt-8">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {books.length === 0 ? (
            <p>No Overdue Books</p>
          ) : (
            <div className="flex flex-wrap gap-8">
              {books.map((book) => (
                <div
                  key={book?._id}
                  className="bg-blue-900 h-96 w-64 rounded-md p-8"
                >
                  <h2> Book Name : {book?.BookName}</h2>
                  <p> No. of books Available : {book?.NumberOfCopies}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OverDueBooks;
