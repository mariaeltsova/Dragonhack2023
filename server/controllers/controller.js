axios = require("axios");

exports.getBook = (req, res) => {
  axios.get('https://openlibrary.org/works/OL1992198W.json')
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      print(error)
      res.status(500).send("Error");
    });
  
  //res.status(200).json({ message: "This is a book."});
  

}