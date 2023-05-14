const mongoose = require('mongoose');
const uri = 'mongodb+srv://mariaeltsova:898998ski@cluster0.kahvp72.mongodb.net/dh?retryWrites=true&w=majority';
const wordSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  word: { type: String, required: true},
  translation: { type: String, required: true},
  definition: { type: String, required: true}
});

const userSchema = new mongoose.Schema({
  id: { type: Number, required: false },
  username: { type: String, required: true },
  words: { type: [wordSchema], required: false}
});

const User = mongoose.model("User", userSchema);
const Word = mongoose.model("Word", wordSchema);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
  const word1 = new Word({word: 'Steklenica', translation: 'Bottle', definition: 'višja posoda za tekočine z ozkim, podolgovatim grlom, navadno iz stekla'});
  const word2 = new Word({word: 'Riba', translation: 'Fish', definition: 'vodna žival, ki diha s škrgami in se premika s plavutmi'});
  const newUser = new User({ username: 'me@google.com', words: [word1, word2]});
  newUser.save().then((result) => {
    console.log('New user created:', result);
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });
});


async function getUserById(id) {
  try {
    const user = await User.findById(id);
    console.log("retrieved user", user);
    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function saveWordsToMongo(words, id) {
  //retrieve user from mongo
  const user = getUserById(id);
  for (const word of words) {
    var translation = "chatgpt translation";
    var definition = "chatgpt definition";
    new Word({word: word, translation: translation, definition: definition});
  }
}