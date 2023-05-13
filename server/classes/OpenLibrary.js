const axios = require("axios")

module.exports = class OpenLibrary {
  constructor(language = "eng") {
    this.axios = axios.create({
      baseURL: "https://openlibrary.org/search.json",
    })
  }

  async getBooksBySubject(subject) {
    // https://openlibrary.org/search.json?subject=toys
    const response = await this.axios.get("/", {
      params: { subject: subject, language: this.language },
    })

    console.log(response.data)
    return response.data
  }
  async getBooksByKeywords(keywords) {}
}
/*
- jezik
- nivo
- topic
*/
