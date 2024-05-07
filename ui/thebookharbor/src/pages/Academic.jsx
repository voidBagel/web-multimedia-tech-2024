import React from "react";
import BookList from "./BookList";

function Academic() {
    return <BookList fetchEndpoint="http://localhost:8082/api/books/academic" title="Academic books" />;
}

export default Academic;