package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

// Library Table
type Library struct {
	Books []Book `json:"books"`
}

// Book Items
type Book struct {
	Title    string `json:"title"`
	Author   string `json:"author"`
	Language string `json:"language"`
	Genre    string `json:"genre"`
	Room     string `json:"room"`
	Shelf    string `json:"shelf"`
}

// BookInfo Information about a newly added book
type BookInfo struct {
	Title    string
	Author   string
	Language string
	Genre    string
	Room     string
	Shelf    string
	A        string
	B        string
	C        string
	D        string
	E        string
	F        string
}

func addHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/add" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	if r.Method != "GET" {
		http.Error(w, "Method is not supported.", http.StatusNotFound)
		return
	}

	p := BookInfo{
		A: "Názov",
		B: "Autor",
		C: "Jazyk",
		D: "Žáner",
		E: "Miestnosť",
		F: "Polička",
	}

	t, _ := template.ParseFiles("static/add.html")
	t.Execute(w, p)
}

func submitHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/submit" {
		http.Error(w, "404 not found.", http.StatusNotFound)
		return
	}

	p := BookInfo{
		Title:    r.FormValue("title"),
		Author:   r.FormValue("author"),
		Language: r.FormValue("language"),
		Genre:    r.FormValue("genre"),
		Room:     r.FormValue("room"),
		Shelf:    r.FormValue("shelf"),
		A:        "Názov",
		B:        "Autor",
		C:        "Jazyk",
		D:        "Žáner",
		E:        "Miestnosť",
		F:        "Polička",
	}

	if len(p.Title) > 0 && len(p.Author) > 0 && len(p.Language) > 0 && len(p.Genre) > 0 && len(p.Room) > 0 && len(p.Shelf) > 0 {
		file, err := os.Open("static/javascripts/books.json")

		if err != nil {
			fmt.Println(err)
		}

		byteValue, _ := ioutil.ReadAll(file)

		var library Library
		json.Unmarshal(byteValue, &library)

		newBook := Book{
			Title:    p.Title,
			Author:   p.Author,
			Language: p.Language,
			Genre:    p.Genre,
			Room:     p.Room,
			Shelf:    p.Shelf,
		}

		library.Books = append(library.Books, newBook)

		j, _ := json.MarshalIndent(library, "", "    ")
		_ = ioutil.WriteFile("static/javascripts/books.json", j, 0644)

		t, _ := template.ParseFiles("static/added.html")
		t.Execute(w, p)

	} else {
		t, _ := template.ParseFiles("static/add.html")
		t.Execute(w, p)

		fmt.Fprintf(
			w,
			"<script>alert('Jedno alebo viacero poličiek nebolo vyplnených');</script>")
	}
}

func main() {
	fileServer := http.FileServer(http.Dir("./static")) // loads the side
	http.Handle("/", fileServer)                        // loads index.html
	http.HandleFunc("/add", addHandler)                 // handles /add link
	http.HandleFunc("/submit", submitHandler)           // handles submitting a book

	fmt.Printf("Starting server at port 4000\n")

	// loads the site
	if err := http.ListenAndServe(":4000", nil); err != nil {
		log.Fatal(err)
	}
}
