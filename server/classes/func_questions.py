def get_questions_sum(text, lang):
    import requests
    import json
    model = "gpt-3.5-turbo"
    token = ***
    prompt = f"""
Input text in {lang} language:
"{text}"
Create a list of questions following these three steps:
1. Generate a summary of the given {lang} text.
2. Ask three different questions in {lang} that can be answered with a YES or a NO based on the generated summary.
3. Try to answer every questions. Is the information in the _text_ sufficient to give a clear Yes or No answer? If not, try to replace the question with another one.
        
Return output in a json format:
"summary": [summary of the text],
"first question":["first question in {lang}","the answer 'YES', 'NO', or 'NOT ENOUGH INFORMATION'"], 
"second question": ["first question in {lang}","the answer 'YES', 'NO', or 'NOT ENOUGH INFORMATION'"],
"third question":["first question in {lang}","the answer 'YES', 'NO', or 'NOT ENOUGH INFORMATION'"]

An example of output for a Russian text:
"summary": [summary of the text],
"questions":
    "first question":["Сразу ли герой понял, где он находится?","YES"], 
    "second question": ["Был ли в комнате кто-то еще?","NO"],
    "third question":["Дело происходит весной?","NOT ENOUGH INFORMATION"],
    
    """
    JSON={
        "model": model,
        "messages": [{"role": "user", "content": prompt}]
    }
    response = requests.post("https://openai-api.meetings.bio/api/openai/chat/completions", json = JSON, headers={"Authorization": f"Bearer {token}"})
    if response.ok:
        res = response.json()["choices"][0]["message"]["content"]
        try:
            return json.loads(res)['questions']
        except:
            return 'Error'
