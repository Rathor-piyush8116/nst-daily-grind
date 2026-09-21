// ─── 6 ───
def dragon_category(power, stamina):
    if power == stamina:
        return "BALANCED"
    elif power >= 2*stamina:
        return "OVERPOWERED"
    elif 2*power <= stamina:
        return "UNBREAKABLE"
    elif 2*stamina > power > stamina:
        return "MIGHTY"
    else:
        return "ENDURING"

// ─── 11 ───
BALANCED