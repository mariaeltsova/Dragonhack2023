const GoogleBooks = require("./GoogleBooks")

const gb = new GoogleBooks()
// gb.getBooksBySubject("javascript")
gb.getBooksByKeywords(["popcorn", "restaurant"])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
