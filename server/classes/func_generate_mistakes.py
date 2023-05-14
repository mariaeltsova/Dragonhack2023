def categories(lang, n):
    import json
    import requests
    model = "gpt-3.5-turbo"
    token = "***"
    prompt = f"""
List {str(n)} grammatical categories that are important for studying {lang} language.

Return output in a json format:
    "cats": [
        "category 1",
        "category 2",
        "category 3",
        ...]
Example for Russian language:
    "cats": [
        "number",
        "case",
        "passive voice",
        "verbal aspect",
        ...]


"""
    JSON={
        "model": model,
        "messages": [{"role": "user", "content": prompt}]
    }
    response = requests.post("https://openai-api.meetings.bio/api/openai/chat/completions", json = JSON, headers={"Authorization": f"Bearer {token}"})
    if response.ok:
        res = response.json()["choices"][0]["message"]["content"]
        return json.loads(res)

def mistake(word, lang, categ):
    import json
    import requests
    model = "gpt-3.5-turbo"
    token = "***"
    prompt = f"""
1. Generate a _correct sentence_: a normal sentence in {lang} that includes the word "{word}".
2. Make an _incorrrect sentence_: alter the _correct sentence_ so that it contains exactly one grammatical mistake in the grammatical {categ}.
3. The incorrect sentence should not be identical to the incorrect sentence.

Return output in a json format:
    "correct": "correct sentence",
    "incorrect": "incorrect sentence"

Example of an output in English:
    "correct": "I don't like spiders",
    "incorrect": "I doesn't like spiders"
    "note": "The mistake in the incorrect sentence is the incorrect grammatical form of the auxillary word"
    """
    JSON={
        "model": model,
        "messages": [{"role": "user", "content": prompt}]
    }
    response = requests.post("https://openai-api.meetings.bio/api/openai/chat/completions", json = JSON, headers={"Authorization": f"Bearer {token}"})
    if response.ok:
        res = response.json()["choices"][0]["message"]["content"]
        return json.loads(res)
      
def exercise_mistakes(word_list, lang):
    n = len(word_list)
    cats = categories(lang, n)['cats'] 
    naloga = []
    for w in word_list:
        cat = cats.pop(-1)
        naloga.append(mistake(w, lang, cat))
    return naloga
