# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

    User.create!(
    first_name: "Todd",
    last_name: "Seller",
    email: "tseller@onyxwear.com",
    street_address: "1600 Pennsylvania Ave NW",
    city: "Washington",
    state: "DC",
    zip_code: 20500,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')

    User.create!(
    first_name: "Brigitte",
    last_name: "Kozena",
    email: "brigittekozena@gmail.com",
    street_address: "750 Hearst Castle Rd",
    city: "San Simeon",
    state: "CA",
    zip_code: 93452,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')

    User.create!(
    first_name: "Matt",
    last_name: "Harris",
    email: "matrharr@gmail.com",
    street_address: "Flushing Meadow - Corona Park",
    city: "Flushing",
    state: "NY",
    zip_code: 11368,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')

    User.create!(
    first_name: "Jeremy",
    last_name: "Oltean",
    email: "jeremyoltean@gmail.com",
    street_address: "45500 Fremont Blvd",
    city: "Fremont",
    state: "CA",
    zip_code: 94538,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')


    User.create!(
    first_name: "Cody",
    last_name: "Kendall",
    email: "cody.kendall21@gmail.com",
    street_address: "1900 Fall River Rd",
    city: "Estes Park",
    state: "CO",
    zip_code: 80517,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')

    first_name = Faker::Name.first_name
    User.create!(
    first_name: first_name,
    last_name: Faker::Name.first_name,
    email: Faker::Internet.email(first_name),
    street_address: "73 E Park St",
    city: "Butte",
    state: "MT",
    zip_code: 59701,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')

    first_name = Faker::Name.first_name
    User.create!(
    first_name: first_name,
    last_name: Faker::Name.first_name,
    email: Faker::Internet.email(first_name),
    street_address: "1 Arrowhead Dr",
    city: "Kansas City",
    state: "MO",
    zip_code: 64129,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')

    first_name = Faker::Name.first_name
    User.create!(
    first_name: first_name,
    last_name: Faker::Name.first_name,
    email: Faker::Internet.email(first_name),
    street_address: "1 Everbank Field Dr",
    city: "Jacksonville",
    state: "FL",
    zip_code: 32202,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')

    first_name = Faker::Name.first_name
    User.create!(
    first_name: first_name,
    last_name: Faker::Name.first_name,
    email: Faker::Internet.email(first_name),
    street_address: "1 AT&T Way",
    city: "Arlington",
    state: "TX",
    zip_code: 76011,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')
  
  first_name = Faker::Name.first_name
    User.create!(
    first_name: first_name,
    last_name: Faker::Name.first_name,
    email: Faker::Internet.email(first_name),
    street_address: "200 West St",
    city: "New York",
    state: "NY",
    zip_code: 10282,
    cell_phone: Faker::PhoneNumber.cell_phone,
    password: 'password',
    password_confirmation: 'password')


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

30.times do
  Donation.create!(
    user_id: rand(1..1000),
    charity_id: rand(1..100),
    disaster_id: rand(1..10),
    amount: rand(1..100))
end
