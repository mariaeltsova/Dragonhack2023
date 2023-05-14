const axios = require('axios');
const deepl = require('deepl-node');

async function lemma(word, lang) {
    const model = 'gpt-3.5-turbo';
    const token = 'JoK34dQJrN8UhTdMepDr2XauaUAV7A';
    const prompt = `
    1. Get a normalized form of the word "${word}" in the ${lang} language.
    Return output in a valid json format:
        {"lemma": "normalized form", "note": "any of your observations during normalization"}
    Example output:
        {"lemma": "rope", "note": "Rope is already normalized, does not require normalization"}
    `;
    const json = {
        'model': model,
        'messages': [{'role': 'user', 'content': prompt}]
    };
    const headers = {
        'Authorization': `Bearer ${token}`
    };
    const response = await axios.post('https://openai-api.meetings.bio/api/openai/chat/completions', json, { headers });
    console.log(response.data.choices[0].message.content)
    if(!response.data){
        console.log("Error");
        return 'Error';
    }
    return JSON.parse(response.data.choices[0].message.content).lemma;
}

function tag_w_in_sent(w_f, sentence) {
    const dels = sentence.match(new RegExp(`(.*?)(?:${w_f})(.*)`));
    return `${dels[1]}<em> ${w_f} </em>${dels[2]}`;
}

async function card_defin(lemma, sentence, lang) {
    const model = "gpt-4";
    const token = "JoK34dQJrN8UhTdMepDr2XauaUAV7A"
    const prompt = `
  Get a definition of the meaning of the ${lang} word "${lemma}" which is exemplified in the sentence "${sentence}".
  
  Return output as json with two keys:
      {"definition": "the text of the definition in ${lang} language",
      "sentence": "sentence"}
  
  Example of an output for Rusian word "работать" in the sentence "телефон не работает":
      {'definition': 'работать – об устройстве или заведении – быть доступным для использования, включенным'}
  `;
    const json = {
      "model": model,
      "messages": [{"role": "user", "content": prompt}]
    };
  
    try {
      const response = await axios.post("https://openai-api.meetings.bio/api/openai/chat/completions", json, { headers: {"Authorization": `Bearer ${token}`} });
      const res = response.data.choices[0].message.content;
      return JSON.parse(res).definition;
    } catch (error) {
      return error.response.data;
    }
  }

module.exports = class ChatGPT{
    async generateText(form, lang) {
        const model = 'gpt-3.5-turbo';
        const token = 'JoK34dQJrN8UhTdMepDr2XauaUAV7A';
        const lem = await lemma(form, lang);
        const prompt = `
        1. Suggest two different sentences that represent the typical uses of the word "${lem}". Both sentences need to use exactly the same word.
        2. Replace the word in these sentences with a gap.

        Return output in a valid json format:
            {"example1": ["typical use of the word '${lem}' in ${lang} language; with a gap instead of the word", "the word form from the gap"],
            "example2": ["another typical use of the word '${lem}' in ${lang} language; with a gap instead of the word", "the word form from the gap"]}
            
        Example output for the word "школа" in Russian:
            {"example1": ["Мои дети уже ходят в __.", "школу"],
            "example2": ["В __ я был очень застенчивым.", "школе"]}
        `;
        const json = {
            'model': model,
            'messages': [{'role': 'user', 'content': prompt}]
        };
        const headers = {
            'Authorization': `Bearer ${token}`
        };
        console.log("json string:")
        console.log(JSON.parse(`{"example1": ["Мои дети уже ходят в __.", "школу"],
        "example2": ["В __ я был очень застенчивым.", "школе"]}`))

        const response = await axios.post('https://openai-api.meetings.bio/api/openai/chat/completions', json, { headers });
        const res = response.data.choices[0].message.content;
        console.log(res)
        console.log("final result:")
        console.log(JSON.parse(res));
        try {
            return JSON.parse(res);
        } catch (error) {
            return 'Error';
        }
    }

    async card_transl_deepl(w_f, sentence, lang) {
        const auth_key = "b1f64ec7-d593-4037-5c95-572c715632e8:fx";
        const translator = new deepl.Translator(auth_key);
        const tagged_sent = tag_w_in_sent(w_f, sentence);
        const result = await translator.translateText(tagged_sent, null, 'EN-US');
        let text = result.text

        const trans = result.text.match(/<em>(.*?)<\/em>/)[1];

        const lem_english = await lemma(trans, 'English');

        const lem_orig = await lemma(w_f, lang);

        const definition = await card_defin(lem_orig, sentence, lang);
        console.log(definition)

        return {lem_orig, lem_english, definition};
    }

    
    

}
        
