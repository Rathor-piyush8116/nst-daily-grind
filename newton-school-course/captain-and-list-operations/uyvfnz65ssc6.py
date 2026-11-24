// ─── 2 ───
captain_army = input().split()
brother_army = input().split()

# Challenge 1: Concatenate the two army lists and print
army = captain_army + brother_army
print(army)

# Challenge 2: Multiply team size by 3 using the combined list and print
potion_army = army * 3
print(potion_army)

# Challenge 3: Check if "Archer" is present in the army
print("Archer" in potion_army)

# Challenge 4: Check if "Enemy" is absent ("Safe") or present ("Not Safe")
if "Enemy" not in potion_army:
  print("Safe")
else:
  print("Not Safe")

// ─── 5 ───
['Captain', 'Archer', 'Soldier', 'Warrior', 'Guard', 'Knight']
['Captain', 'Archer', 'Soldier', 'Warrior', 'Guard', 'Knight', 'Captain', 'Archer', 'Soldier', 'Warrior', 'Guard', 'Knight', 'Captain', 'Archer', 'Soldier', 'Warrior', 'Guard', 'Knight']
True
Safe