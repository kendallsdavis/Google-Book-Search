import React from "react";
import API from "../utils/APIcalls.js";
import Results from "../components/Results/Results"
import RenderBooks from '../components/Render/Render'

const styles = {
  alignment: {
    textAlign: "center"
  }
}

class Saved extends React.Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
    .then(res => {
      this.setState({savedBooks: res.data})
      console.log(res)
    })
    .catch(err => console.log(err));
  }

  deleteBook = event => {
    let id = event.target.getAttribute('id')
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Results>
        {this.state.savedBooks.length === 0 ? <h1 style={styles.alignment}>Search for a Book!</h1> : 
            this.state.savedBooks.map((book,i) => (
              <RenderBooks
                key={book._id}
                id={book._id}
                option={"delete"}
                author={book.author}
                url={book.link}
                title={book.title}
                image={book.image}
                description={book.description}
                deleteBook={this.deleteBook.bind(this)}
              />
            ))
          }   
        </Results>
      </div>
    );
  }
}

export default Saved;