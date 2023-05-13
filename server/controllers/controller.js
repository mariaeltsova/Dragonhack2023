const axios = require("axios");
const GoogleBooks = require("../classes/GoogleBooks");
const striptags = require("striptags");
const gb = new GoogleBooks()

exports.getBook = async (req, res) => {
  try{
    let keyword = "mister"
    const result = await gb.getBooksBySubject([keyword]);

    const filteredArray = result.items.filter(element => element.searchInfo.textSnippet.toLowerCase().includes(keyword));
    const strippedArray = filteredArray.map(element => striptags(element.searchInfo.textSnippet));

    res.status(200).send(strippedArray[0]);
  }
  catch(error){
    res.status(500).json(error);
  }

    /*.then(response => {
      console.log(response)
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send("Error");
    });*/
    
  //res.status(200).json({ message: "This is a book."});

}