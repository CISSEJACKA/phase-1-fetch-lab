function fetchBooks() {
  
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) 
    .then((json) => renderBooks(json)); 
}

function renderBooks(books) {
  
  console.log(books); 

  
}

fetchBooks();
