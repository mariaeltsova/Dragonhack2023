const gbooks = require("@chewhx/google-books")

module.exports = class GoogleBooks {
  async getBooksBySubject(subject) {
    const result = await gbooks.standard(
      { subject: subject },
      { maxResults: 10 }
    )
    console.log(result)

    return result
  }

  async getBooksByKeywords(keywords) {
    const result = await gbooks.standard({}, { q: "banana", maxResults: 10 })
    console.log(result.items)

    return result
  }
}
