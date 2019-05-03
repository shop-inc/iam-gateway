package resolvers

import (
	"context"

	"github.com/Duncanian/iam-gateway/server"
	"github.com/Duncanian/iam-gateway/server/models"
) // THIS CODE IS A STARTING POINT ONLY. IT WILL NOT BE UPDATED WITH SCHEMA CHANGES.

type Resolver struct{}

func (r *Resolver) Mutation() server.MutationResolver {
	return &mutationResolver{r}
}
func (r *Resolver) Query() server.QueryResolver {
	return &queryResolver{r}
}

type mutationResolver struct{ *Resolver }

func (r *mutationResolver) CreateUser(ctx context.Context, input models.NewUser) (*models.User, error) {
	createdUser := &models.User{
		ID:      "Test ID",
		Name:    input.Name,
		Email:   input.Email,
		Picture: "Test Picture",
	}
	server.IamUsers = append(server.IamUsers, *createdUser)
	return createdUser, nil
}

type queryResolver struct{ *Resolver }

func (r *queryResolver) Users(ctx context.Context) ([]models.User, error) {
	return server.IamUsers, nil
}
