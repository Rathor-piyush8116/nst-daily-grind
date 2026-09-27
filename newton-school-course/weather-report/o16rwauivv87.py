temp = int(input())

if temp < 0:
  weather = "Freezing Weather"
elif temp <= 9:
  weather = "Very Cold"
elif temp <= 19:
  weather = "Cold"
elif temp <= 29:
  weather = "Normal"
elif temp <= 39:
  weather = "Hot"
else:
  weather = "Very Hot"

print(f"The weather today is classified as: {weather}")