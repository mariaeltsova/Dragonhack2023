const gbooks = require("@chewhx/google-books")
const striptags = require('striptags');

module.exports = class GoogleBooks {
  constructor(language){
    this.language = language;
  }
  async getBooksBySubject(subject) {
    const result = await gbooks.standard(
      { subject: subject },
      { maxResults: 10, printType: 'books', filter: 'full'}
    );

    return result
  }

  async getBooksByKeywords(keyword) {
    const result = await gbooks.standard(
      {},
      { q: keyword, maxResults: 10, langRestrict: this.language }
    )
    // console.log(result.items[0])
    // console.log(result.items.map((el) => el.searchInfo?.textSnippet))

    return result
  }
}
