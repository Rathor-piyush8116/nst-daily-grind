# Your code here
year1, year2, year3, year4 = map(int, input().split())

earliest_year = year1
movie_name = "Spiderman"

if year2 < earliest_year:
    earliest_year = year2
    movie_name = "Superman"

if year3 < earliest_year:
    earliest_year = year3
    movie_name = "Batman"

if year4 < earliest_year:
    earliest_year = year4
    movie_name = "Aquaman"

print(movie_name)