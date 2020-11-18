import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["library"]
mycol = mydb["books"]

books = open("books.txt", "r", encoding="utf-8").read().split("\n")
names = []
count = 0
for book in books:
    info = book.split("; ")

    y = {
        "Title"   : info[0],
        "Author"  : info[1],
        "Language": info[2],
        "Genre"   : info[3],
        "Room"    : info[4],
        "Shelf"   : info[5]
    }

    names.append(y)
    count += 1
    print(y)

x = mycol.insert(names)
print(count)
print(x.inserted_ids)