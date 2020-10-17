class ApplicationController < ActionController::Base
  def require_login
    if session[:user_id]
      true
    else
      redirect_to '/login'
      false
    end
  end

  def logout
    session[:user_id] = nil
    session.delete(:user_id)
    cookies.delete :loggedin
    cookies.delete :username
  end
end
