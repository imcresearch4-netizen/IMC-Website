import re
with open(r'C:\dev\imc-nextjs1\lib\data\publications.ts') as f:
    content = f.read()

# Search for "K Iqbal" (Kainat Iqbal who is on the team)
patterns = ['kainat', 'k. iqbal', 'k iqbal', 'kainat iqbal']
for pat in patterns:
    matches = re.findall(r'"authors":\s*"[^"]*' + pat + r'[^"]*"', content, re.IGNORECASE)
    if matches:
        print(f'Pattern "{pat}": {len(matches)} matches')
        for m in matches[:10]:
            print(f'  {m[:180]}')
    else:
        print(f'Pattern "{pat}": 0 matches')

# Also check for publications that mention fall detection, telerehabilitation, biosensor
# and see their authors
print("\n--- Publications with IMC3-related topics ---")
topics = ['fall detection', 'telerehabilitation', 'biosensor', 'elderly.*rehabilitation', 'wearable.*sensor.*fall']
for topic in topics:
    matches = re.finditer(r'\{[^}]*"title":\s*"[^"]*' + topic + r'[^"]*"[^}]*\}', content, re.IGNORECASE)
    for m in matches:
        block = m.group()
        authors = re.search(r'"authors":\s*"([^"]*)"', block)
        title = re.search(r'"title":\s*"([^"]*)"', block)
        if authors and title:
            print(f'  Title: {title.group(1)[:100]}')
            print(f'  Authors: {authors.group(1)[:100]}')
            print()
