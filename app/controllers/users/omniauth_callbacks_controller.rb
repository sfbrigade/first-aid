class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController

  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    # if User.find_by_email(request.env["omniauth.auth"])
    p request.env["omniauth.auth"]
    @user = User.from_omniauth(request.env["omniauth.auth"])

    
    @user.save
    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end

  def failure
    redirect_to root_path
  end


# def create
#   auth_hash = request.env['omniauth.auth']
 
#   @authorization = Authorization.find_by_provider_and_uid(auth_hash["provider"], auth_hash["uid"])
#   if @authorization
#     render :text => "Welcome back #{@authorization.user.name}! You have already signed up."
#   else
#     user = User.new :name => auth_hash["user_info"]["name"], :email => auth_hash["user_info"]["email"]
#     user.authorizations.build :provider => auth_hash["provider"], :uid => auth_hash["uid"]
#     user.save
 
#     render :text => "Hi #{user.name}! You've signed up."
#   end
# end




  # You should configure your model like this:
  # devise :omniauthable, omniauth_providers: [:twitter]

  # You should also create an action method in this controller like this:
  # def twitter
  # end

  # More info at:
  # https://github.com/plataformatec/devise#omniauth

  # GET|POST /resource/auth/twitter
  # def passthru
  #   super
  # end

  # GET|POST /users/auth/twitter/callback
  # def failure
  #   super
  # end

  # protected

  # The path used when OmniAuth fails
  # def after_omniauth_failure_path_for(scope)
  #   super(scope)
  # end
end
