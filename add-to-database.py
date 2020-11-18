"""
Author: Daniel Dovhun
Task: Takes books from 'knihy.txt' and adds them to the JSON database.
Start: 15 October 2020
End: 16 October 2020
"""

import json

# Adds the books into the database
def add_to_database(data):                                                  
    with open("public/javascripts/books.json", "w") as database:
        json.dump(data, database, indent=4)


# Opens the text folder where the books are located
zoznam = open("books.txt", "r", encoding="utf-8").read().split("\n")

# Opens the JSON file
with open("public/javascripts/books.json") as data:
    data = json.load(data)
    
    # Choosing the array where the books will go
    knihy = data["books"]

    # Takes the books from the list and adds them 
    for kniha in zoznam:
        info = kniha.split("; ")
        
        y = {
            "title": info[0], 
            "author": info[1], 
            "language": info[2], 
            "genre": info[3], 
            "room": info[4], 
            "shelf": info[5]
        } 
    
        # appending data to 'Knihy'
        knihy.append(y) 

    
add_to_database(data)