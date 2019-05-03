package models

type User struct {
	ID      string `json:"id,omitempty`
	Name    string `json:"name,omitempty`
	Email   string `json:"email,omitempty`
	Picture string `json:"picture,omitempty`
}

type Users []User
