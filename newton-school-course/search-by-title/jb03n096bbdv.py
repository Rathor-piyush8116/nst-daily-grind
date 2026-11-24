// ─── 19 ───
def search_book_by_title(book_catalog, title):
    for i in range(len(book_catalog)):
        if book_catalog[i] == title:
            return True
    return False

// ─── 20 ───
2 States
Harry Potter
Divergent
stop
Divergent
Output
True