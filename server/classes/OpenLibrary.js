const axios = require("axios")

module.exports = class OpenLibrary {
  constructor(language = "eng") {
    this.axiosSubject = axios.create({
      baseURL: "https://openlibrary.org/search.json",
    })
    this.axiosKeywords = axios.create({
      baseURL: "https://ia800204.us.archive.org/fulltext/inside.php",
    })
  }

  async getBooksBySubject(subject) {
    // https://openlibrary.org/search.json?subject=toys
    const response = await this.axiosSubject.get("/", {
      params: { subject: subject, language: this.language, limit: 10 },
    })

    console.log(response.data)
    return response.data
  }

  async getBooksByKeywords(keywords) {
    const response = await this.axiosSubject.get("", {
      params: { doc: "designevaluation25clin", q: keywords, limit: 2 },
    })

    console.log(response.data)
    return response.data
  }
}
/*
- jezik
- nivo
- topic
*/
