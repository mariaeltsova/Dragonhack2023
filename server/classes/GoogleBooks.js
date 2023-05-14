const gbooks = require("@chewhx/google-books")
const striptags = require('striptags');

module.exports = class GoogleBooks {
  async getBooksBySubject(subject) {
    const result = await gbooks.standard(
      { subject: subject },
      { maxResults: 10}, 
      { printType: 'books' },
      { filter: 'full' },
    );

    return result
  }

  async getBooksByKeywords(keywords) {
    const result = await gbooks.standard(
      {},
      { q: keywords.join("+"), maxResults: 10 }
    )
    // console.log(result.items[0])
    // console.log(result.items.map((el) => el.searchInfo?.textSnippet))

    return result
  }
}
