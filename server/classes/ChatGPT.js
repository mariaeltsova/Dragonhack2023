const axios = require('axios');

module.exports = class ChatGPT{ 
    async generateText(req, res) {
        const json = {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": "Hi chatgpt :)"}]
        }
        const token = "JoK34dQJrN8UhTdMepDr2XauaUAV7A";
        const headers = {
            "Authorization": `Bearer ${token}`
        }
        const result = await axios.post('https://openai-api.meetings.bio/api/openai/chat/completions', json, { headers });
        return result
    }
}