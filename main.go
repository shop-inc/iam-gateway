package main

import (
	"log"
	"net/http"

	"github.com/Duncanian/iam-gateway/server/controllers"
	"github.com/gorilla/mux"
)

func handleRequests() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", controllers.HomePage)
	router.HandleFunc("/auth", controllers.AllUsers)
	log.Fatal(http.ListenAndServe(":8080", router))
}

func main() {
	handleRequests()
}
