import React, { Component } from 'react';
import { getBooks } from '../services/LibraryData';

class Bookcard extends Component {
    state = {
        myLibrary: [
        {
            "author": "Chinua Achebe",
            "country": "Nigeria",
            "imageLink": "images/things-fall-apart.jpg",
            "language": "English",
            "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
            "pages": 209,
            "title": "Things Fall Apart",
            "year": 1958,
            "read": true
          },
          {
            "author": "Hans Christian Andersen",
            "country": "Denmark",
            "imageLink": "images/fairy-tales.jpg",
            "language": "Danish",
            "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
            "pages": 784,
            "title": "Fairy tales",
            "year": 1836,
            "read": false
          },
        ]
    }

    deleteClicked = (book) => {
        console.log(book);
        // create a new array with all the books BUT the object that was clicked on
        const myLibrary = this.state.myLibrary.filter(b => b.title !== book.title);
        this.setState({ myLibrary });
    }

    render() {
        const { length: numofbooks } = this.state.myLibrary;
        if (numofbooks === 0) return <p>There are no books in the database</p>;
    return (
        <div>
            <table class="table table-light">
                <thead class="thead-dark">
                    <th>Id:</th>
                    <th>Title:</th>
                    <th>Author:</th>
                    <th>Country:</th>
                    <th></th>
                </thead>
                <tbody>
                    {this.state.myLibrary.map((book, index) => (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.country}</td>
                        <td><button onClick={() => this.deleteClicked(book)} class="btn btn-danger btn-sm">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    );
}

}

export default Bookcard;