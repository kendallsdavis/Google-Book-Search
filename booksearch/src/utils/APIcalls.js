import axios from "axios";

// Set up the API key and search URL as constants 
const API = "AIzaSyCrflNWeNSyoEZ4-Lb7tasEYind3T2VZwg";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";


// create function to take in a query, manipulate it into the format accepted by the API query, 
// and perform an axios.get function using the query input

export default {
    search: function(bookInfo) {
        const { title, author } = bookInfo;
        const URL = `https://www.googleapis.com/books/v1/volumes?q=intitle=${title}&inauthor=${author}&key=${API}`;
        return axios.get(URL)
    },
    // Returns all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Searches for a book with a specirif ID
    searchBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Saves book
    saveBook: function(bookInfo) {
        return axios.post("/api/books", bookInfo);
    },
    // Deletes book
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
  }  
};