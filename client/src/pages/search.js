import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/APIcalls";
// import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    title: '',
    author: '',
    books: []
  };

  componentDidMount() {
    // this.loadBooks();
  }

  updateInputs(event) {
    const { name, value } = event.target;
    this.setState({
        [name]: value,
    });
  }


  loadBooks = (e) => {
    e.preventDefault();
    const { title, author } = this.state;
    console.log('title: ', title);
    console.log('author: ', author);
    API.search({title, author})
      .then(res => {console.log(res)
        this.setState({ 
        books: res.data.items
      })
      console.log(this.state.books)
    })
    .catch(err => console.log(err));
  };

  saveBook(id) {
    console.log(id)
    console.log(this.state.books)
    for(var i = 0; i<this.state.books.length; i++){
      if(this.state.books[i].id === id){
        let matchedBook = this.state.books[i]
        console.log(matchedBook)
        let savedBook = {}
        savedBook.author = matchedBook.volumeInfo.authors[0]
        savedBook.title = matchedBook.volumeInfo.title
        savedBook.url = matchedBook.volumeInfo.infoLink
        savedBook.img = matchedBook.volumeInfo.imageLinks.smallThumbnail
        savedBook.description = matchedBook.searchInfo.textSnippet
        console.log(savedBook)
        API.saveBook(savedBook)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        break;
      }
    }

  }


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Book Do You Want to Search For?</h1>
            </Jumbotron>
            <form>
              <Input onChange={ (e) => this.updateInputs(e)} name="title" placeholder="Title (required)" />
              <Input onChange={ (e) => this.updateInputs(e)} name="author" placeholder="Author (required)" />
              <FormBtn onClick={ (e) => this.loadBooks(e)} >Submit Book</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Google Book Results</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title}/>
                    <a href={book.volumeInfo.infoLink}>
                      <strong>
                        {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                      </strong> 
                    </a>
                    {book.searchInfo.textSnippet}
                    <button onClick={() => this.saveBook(book.id)}>Save</button>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
