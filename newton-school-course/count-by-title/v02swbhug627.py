// ─── 25 ───
def count_books_by_title(book_catalog, title):
    count = 0
    size = len(book_catalog)

    for i in range(0,size):
        if book_catalog[i] == title:
            count += 1

    return count

// ─── 31 ───
2