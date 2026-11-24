// ─── 16 ───
words = input().split()

if len(words) < 2:
  print("NONE")
else:
  bigrams = []
  for i in range(len(words) - 1):
    bigram = words[i] + " " + words[i + 1]
    bigrams.append(bigram)

  for pair in bigrams:
    print(pair)

// ─── 19 ───
i love
love machine
machine learning