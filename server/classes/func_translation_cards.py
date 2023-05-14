def lemma(word, lang):
    model = "gpt-3.5-turbo"
    token = TOKEN
    prompt = f"""
1. Get a normalized form of the word "{word}" in the {lang} language.

    Return output in a json format:
    "lemma": [normalized form]
    ""
"""
    JSON={
        "model": model,
        "messages": [{"role": "user", "content": prompt}]
    }
    response = requests.post("https://openai-api.meetings.bio/api/openai/chat/completions", json = JSON, headers={"Authorization": f"Bearer {token}"})
    if response.ok:
        res = response.json()["choices"][0]["message"]["content"]
        return json.loads(res)['lemma']

def tag_w_in_sent(w_f, sentence):
    import re
    dels = re.findall(f"(.*?)({w_f})(.*)", sentence)
    return dels[0][0] + "<em> " + dels[0][1] + " </em>" + dels[0][2]

def card_transl_deepl(w_f, sentence, lang):
    import deepl
    import re
    auth_key = KEY
    translator = deepl.Translator(auth_key)
    tagged_sent = tag_w_in_sent(w_f, sentence)
    result = translator.translate_text(tagged_sent, target_lang='EN-US')
    trans = re.findall('<em>(.*?)</em>', result.text)[0]
    
    lem = lemma(w_f, lang)
    
    return {lem:trans}
