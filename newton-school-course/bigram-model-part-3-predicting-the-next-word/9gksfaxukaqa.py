// ─── 9 ───


# Print the word that came right after prev most often.
# If there is a tie, print the one that came right after prev earliest.
# Print NONE if no word came right after prev.

words = input().split()
W = input()

count = {}

for i in range(len(words) - 1):
    if words[i] == W:
        next_word = words[i + 1]

        if next_word not in count:
            count[next_word] = 0

        count[next_word] += 1

if len(count) == 0:
    print("NONE")
else:
    max_word = max(count, key=count.get)
    print(max_word)



// ─── 14 ───
love