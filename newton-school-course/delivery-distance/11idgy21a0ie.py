// ─── 2 ───
def calculateFinalCharge(distance, orderType, membershipStatus):
    if distance == 0:
        return "Invalid delivery distance"
    
    # Base delivery charge calculation
    if 1 <= distance <= 3:
        base_charge = distance * 10
    elif 4 <= distance <= 7:
        base_charge = distance * 8
    else:
        base_charge = distance * 6
        
    # Order type adjustments
    if orderType == 1:
        current_amount = base_charge + 30
    elif orderType == 2:
        current_amount = base_charge * 0.85
    else:
        current_amount = base_charge
        
    # Membership status adjustments
    if membershipStatus == 1:
        final_amount = current_amount * 0.80
    elif membershipStatus == 3:
        final_amount = current_amount * 0.90
    else:
        final_amount = current_amount
        
    return int(final_amount)

// ─── 3 ───
5
1
1