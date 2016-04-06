require 'rails_helper'

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

RSpec.describe User, type: :model, js: true do
  let(:user) {User.create!(first_name: "Usey", last_name: "McUserson", email: "usey@userson.use", password: "password")}
  let(:charity) {Charity.create!(title: "Disasters Inc.", street_address: "69 Cody Way", city: "Boomtown", state: "BT", zip_code: 69697)}
  let(:disaster) {Disaster.create!(category: "earthquake", latitude: 45, longitude: -123)}
  feature "User login & donate" do
    scenario "logs in & donates" do

      visit root_path
      click_link 'Login'
      fill_in "user_email", with: user.email
      fill_in "user_password", with: "password"

      click_on "Log In"
      expect(page).to have_content("Usey")

      # visit disasters_path
      # click_on "earthquake"
      # fill_in "donation_amount", with: 100
      # click_on "Donate Now"
      # sleep(5)

    end
  end

end