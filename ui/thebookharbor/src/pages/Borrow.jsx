import React from "react";
import BookList from "./BookList";

function Borrow() {
    return <BookList fetchEndpoint="http://localhost:8082/api/books/borrow" title="Borrow" />;
}

export default Borrow;
