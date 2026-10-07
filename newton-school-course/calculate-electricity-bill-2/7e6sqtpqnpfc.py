// ─── 2 ───
def calculate_bill(units):
    #Return a float — the total electricity bill including the 10% surcharge, rounded to 1 decimal place.
    
    if units <= 100:
        base_bill = units * 4
    elif units <= 200:
        base_bill = 400 + (units - 100) * 5
    elif units <= 300:
        base_bill = 900 + (units - 200) * 6
    elif units <= 400:
        base_bill = 1500 + (units - 300) * 7
    else:
        base_bill = 2200 + (units - 400) * 8
        
    # Add the 10% surcharge to the base bill
    total_bill = base_bill * 1.10
    
    # Return the final amount rounded to 1 decimal place
    return round(total_bill, 1)

// ─── 7 ───
Electricity Bill: Rs. 4.4