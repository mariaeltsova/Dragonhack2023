def card_defin(lang, lemma, sentence):
    model = "gpt-4"
    token = "JoK34dQJrN8UhTdMepDr2XauaUAV7A"
    prompt = f"""
Get a definition of the meaning of the {lang} word "{lemma}" which is exemplified in the sentence "{sentence}".

Return output as json with two keys:
    "definition": "the text of the definition in {lang} language",
    "sentence": "sentence"

Example of an output for Rusian word "работать" in the sentence "телефон не работает":
    'definition': 'работать – об устройстве или заведении – быть доступным для использования, включенным'

"""
    JSON={
        "model": model,
        "messages": [{"role": "user", "content": prompt}]
    }
    response = requests.post("https://openai-api.meetings.bio/api/openai/chat/completions", json = JSON, headers={"Authorization": f"Bearer {token}"})
    if response.ok:
        res = response.json()["choices"][0]["message"]["content"]
    try:
        return json.loads(res)
    except:
        return res

###Examples of output:


###card_defin('Slovenian', 'delati', 'Danes ne delam')
###Out[397]:
###{'definition': 'delati - opravljati določeno delo, dejavnost, opravilo ali nalogo',
### 'sentence': 'Danes ne delam'}
