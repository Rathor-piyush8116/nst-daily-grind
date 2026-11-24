// ─── 23 ───
def modify_holidays(holidays):
    holidays[3] = "Good Friday"
    print(holidays)

    holidays.append("Eid")
    print(holidays)

    holidays.insert(2,"Makar Sankranti")
    print(holidays)

    holidays.pop()
    print(holidays)

    holidays.remove("Independence Day")
    print(holidays)

// ─── 31 ───
['New Year', 'Republic Day', 'Holi', 'Good Friday', 'Independence Day', 'Diwali', 'Eid']
['New Year', 'Republic Day', 'Holi', 'Good Friday', 'Independence Day', 'Diwali', 'Eid', 'Eid']
['New Year', 'Republic Day', 'Makar Sankranti', 'Holi', 'Good Friday', 'Independence Day', 'Diwali', 'Eid', 'Eid']
['New Year', 'Republic Day', 'Makar Sankranti', 'Holi', 'Good Friday', 'Independence Day', 'Diwali', 'Eid']
['New Year', 'Republic Day', 'Makar Sankranti', 'Holi', 'Good Friday', 'Diwali', 'Eid']