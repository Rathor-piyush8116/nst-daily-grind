// ─── 2 ───
d=float(input())
seat_type = input()
airline = input()
trip_type = input()
if trip_type == "international":
    print("Ramandeep Sir will not fly")

elif trip_type == "domestic" and d<=1.5:
    print("Ramandeep Sir will fly")

elif seat_type == "middle" or airline == "IngidoX":
        print("Ramandeep Sir will not fly")

else:
    print("Ramandeep Sir will fly")


// ─── 25 ───
Ramandeep Sir will not fly