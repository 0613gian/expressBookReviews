const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  const sendDataWithPromise = () => new Promise((resolve, reject) => {
        try {
            const result = { message: 'success', data: books };
            resolve(result);
        } catch (error) {
            reject(error)
        }
    })

    sendDataWithPromise().then(result => {
        if (result.message === 'success'){
            return res.status(200).json({ message: 'success', books: result.data });
        }
        else {
            return res.status(403).json({ message: 'books not found' })
        }
    }).catch(err => res.status(500).json({ message: 'internal server error' }));
});

});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
