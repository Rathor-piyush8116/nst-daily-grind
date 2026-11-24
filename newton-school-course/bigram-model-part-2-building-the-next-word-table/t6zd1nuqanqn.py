// ─── 2 ───


# For every different word, in the order it first appears, print:
#   word: next1 next2 ...
# Print NONE after the colon if no word came right after it.

words = input().split()

next_table = {}

for i in range(len(words)):
    word = words[i]

    if word not in next_table:
        next_table[word] = []

    if i < len(words) - 1:
        next_table[word].append(words[i + 1])

for word in next_table:
    if len(next_table[word]) == 0:
        print(word + ": NONE")
    else:
        print(word + ": " + " ".join(next_table[word]))



// ─── 7 ───
i: love love hate
love: cats dogs
cats: i
dogs: i
hate: rain
rain: NONE