class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by(username: params[:username], password: params[:password])
    if @user
      session[:user_id] = @user.id
      cookies[:loggedin] = 'true'
      cookies[:userfullname] = @user.fullname

      redirect_to '/services'
    else
      logout
      redirect_to '/login?login_error=1'
    end
  end

  def destroy
    logout
    @debug = 'logged out'
    redirect_to '/login'
  end
end
