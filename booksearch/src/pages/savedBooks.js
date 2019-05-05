import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/APIcalls";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Your Saved Books</h1>
            </Jumbotron>
            </Col>
        </Row>
      </Container>
        );
    }
  }
  
  export default Saved;
  