# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

1000.times do
  first_name = Faker::Name.first_name
  User.create!(
    first_name: first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email(first_name),
    street_address: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state_abbr,
    zip_code: Faker::Address.zip,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')
end

100.times do
  Charity.create!(
    title: Faker::Company.name,
    description: Faker::Company.catch_phrase,
    url: Faker::Internet.url,
    street_address: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state_abbr,
    zip_code: Faker::Address.zip,
    phone: Faker::PhoneNumber.phone_number)
end

disaster = ["earthquake", "hurricane", "tornado", "flood", "wild fire"]

10.times do
  d = Disaster.new(
    latitude: Faker::Address.latitude,
    longitude: Faker::Address.longitude)
  d.category = disaster.sample
  d.save!
end

2000.times do
  Donation.create!(
    user_id: rand(1..1000),
    charity_id: rand(1..100),
    disaster_id: rand(1..10),
    amount: rand(1..100))
end
