const axios = require("axios");
const GoogleBooks = require("../classes/GoogleBooks");
const ChatGPT = require("../classes/ChatGPT");
const striptags = require("striptags");
const gb = new GoogleBooks();
const gpt = new ChatGPT();

exports.getBook = async (req, res) => {
  try{
    if(!req.params.keyword)
      res.status(401).send("No keyword");
    keyword = req.params.keyword;
    const result = await gb.getBooksByKeywords(keyword);

    //const filteredArray = result.items.filter(element => element.searchInfo.textSnippet.toLowerCase().includes(keyword));
    const strippedArray = result.items.map(element => striptags(element.searchInfo.textSnippet));
    
    res.status(200).send(strippedArray);
  }
  catch(error){
    res.status(500).json(error);
  }
}

exports.generateText = async (req, res) => {
  try{
    const result = await gpt.generateText("stopping", "english");
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).json(error);
  }
}

exports.card_transl_deepl = async (req, res) => {
  try{
    const result = await gpt.card_transl_deepl('части', 'выдели части в предложении', 'russian');
    res.status(200).send(result);
  }
  catch(error){
    res.status(500).json(error);
  }
}