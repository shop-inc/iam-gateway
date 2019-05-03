package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/Duncanian/iam-gateway/server/models"
)

func HomePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "This is the End Game")
}

func AllUsers(w http.ResponseWriter, r *http.Request) {
	users := models.Users{
		models.User{
			ID:      "Test ID",
			Name:    "Test Name",
			Email:   "Test Email",
			Picture: "Test Picture",
		},
	}
	json.NewEncoder(w).Encode(users)
	fmt.Println("All users endpoint hit")
}
