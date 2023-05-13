const GoogleBooks = require("./GoogleBooks")

const gb = new GoogleBooks()
// gb.getBooksBySubject("javascript")
gb.getBooksByKeywords(["popcorn", "restaurant"]).catch((err) =>
  console.log(err)
)
