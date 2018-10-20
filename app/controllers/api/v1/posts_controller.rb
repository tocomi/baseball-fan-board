class Api::V1::PostsController < ApplicationController
  def show
    @posts = Post.where({ team_id: params[:id] })
    render json: @posts
  end
end
