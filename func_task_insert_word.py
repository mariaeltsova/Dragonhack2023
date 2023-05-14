def lemma(word, lang):
    model = "gpt-3.5-turbo"
    token = "JoK34dQJrN8UhTdMepDr2XauaUAV7A"
    prompt = f"""
1. Get a normalized form of the word "{word}" in the {lang} language.

    Return output in a json format:
    "lemma": "normalized form"
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

def insert_word(form, lang):
    import requests
    import json
    model = "gpt-3.5-turbo"
    token = "JoK34dQJrN8UhTdMepDr2XauaUAV7A"
    lem = lemma(form, lang)
    prompt = f"""
1. Suggest two different sentences that represent the typical uses of the word "{lem}".
2. Replace the word in these sentences with a gap.

Return output in a json format:
    "example1": ["typical use of the word '{lem}' in {lang} language; with a gap instead of the word", "the word form from the gap"]
    "example2": ["another typical use of the word '{lem}' in {lang} language; with a gap instead of the word", "the word form from the gap"]
    
Example output for the word "школа" in Russian:
    "example1": ["Мои дети уже ходят в __.", "школу"]
    "example2": ["В __ я был очень застенчивым.", "школе"]
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
        return 'Error'
