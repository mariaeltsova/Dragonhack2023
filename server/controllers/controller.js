const axios = require("axios");
const GoogleBooks = require("../classes/GoogleBooks");
const ChatGPT = require("../classes/ChatGPT");
const striptags = require("striptags");
const gb = new GoogleBooks('sl');
const gpt = new ChatGPT();

exports.getBook = async (req, res) => {
  try{
    let keyword = "cockroach"
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
    const result = await gpt.generateText();
    res.status(200).send(result.data.choices[0].message.content);
  }
  catch(error){
    res.status(500).json(error);
  }
}