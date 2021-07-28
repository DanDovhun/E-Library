from flask import Flask, render_template, request

import pymongo as pmg

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", search=False)

@app.route("/", methods=["POST"])
def search():
    myclient = pmg.MongoClient("mongodb://localhost:27017")
    mydb = myclient["library"]
    mycol = mydb["books"]

    options = request.form.getlist("filter")
    search = request.form["search"]

    lst = []
    count = 0

    print(options)
    
    for i in mycol.find():
        if options == "all":
            print(i)
            count += 1
            lst.append(i)

        if options == "title":
            if search.lower() in i["title"].lower():
                count += 1
                lst.append(i)

        if options == "author":
            if search.lower() in i["author"].lower():
                count += 1
                lst.append(i)

        if options == "language":
            if search.lower() in i["languages"].lower():
                count += 1
                lst.append(i)

        if options == "genre":
            if search.lower() in i["genre"].lower():
                count += 1
                lst.append(i)

        if options == "room":
            if search.lower() in i["room"].lower():
                count += 1
                lst.append(i)

        if options == "shelf":
            if search.lower() in i["shelf"].lower():
                count += 1
                lst.append(i)

    print(lst)

    if count == 0:
        return render_template("index.html", search=True, found=False)
    
    else:
        return render_template("index.html", search=True, found=True, books=lst)

if __name__ == "__main__":
    app.run(debug=True, host="localhost", port="8080")