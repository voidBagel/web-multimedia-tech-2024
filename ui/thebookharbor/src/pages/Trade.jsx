import React from "react";
import BookList from "./BookList";

function Trade() {
    return <BookList fetchEndpoint="http://localhost:8082/api/books/trade" title="Trade" />;
}

export default Trade;
