const axios = require("axios");
const GoogleBooks = require("../classes/GoogleBooks");
const striptags = require("striptags");
const gb = new GoogleBooks()

exports.getBook = async (req, res) => {
  try{
    let keyword = ["cockroach"]
    const result = await gb.getBooksByKeywords(keyword);

    const filteredArray = result.items.filter(element => element.searchInfo.textSnippet.toLowerCase().includes(keyword));
    const strippedArray = filteredArray.map(element => striptags(element.searchInfo.textSnippet));
    
    res.status(200).send(strippedArray);
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

exports.saveWords = async (req, res) => {
  try {
    console.log(req)
    
  }
  catch(error) {
    res.status(500).json(error);
  }
}


