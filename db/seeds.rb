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
    email: "me@toddseller.com",
    street_address: "1600 Pennsylvania Ave NW",
    city: "Washington",
    state: "DC",
    zip_code: 20500,
    # cell_phone: Faker::PhoneNumber.cell_phone,
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
    # cell_phone: Faker::PhoneNumber.cell_phone,
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
    cell_phone: 16154064891,
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
    # cell_phone: Faker::PhoneNumber.cell_phone,
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
    # cell_phone: Faker::PhoneNumber.cell_phone,
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

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "875 S Grand Central Pkwy",
    # city: "Las Vegas",
    # state: "NV",
    # zip_code: 89106,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "900 S Grand Central Pkwy",
    # city: "Las Vegas",
    # state: "NV",
    # zip_code: 89106,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "1500 Sugar Bowl Dr",
    # city: "New Orleans",
    # state: "LA",
    # zip_code: 70112,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: "Disaster Inc.",
    # description: "We help when disaster strikes",
    # url: "http://disasterinc.com",
    # street_address: "1701 Bryant St",
    # city: "Denver",
    # state: "CO",
    # zip_code: 80204,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "1 Titans Way",
    # city: "Nashville",
    # state: "TN",
    # zip_code: 37213,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "1 Patriot Pl",
    # city: "Foxborough",
    # state: "MA",
    # zip_code: 02035,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "1 Microsoft Way",
    # city: "Redmond",
    # state: "WA",
    # zip_code: 98052,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "1 Patriot Pl",
    # city: "Foxborough",
    # state: "MA",
    # zip_code: 02035,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "1 Panther Pkwy",
    # city: "Sunrise",
    # state: "FL",
    # zip_code: 33323,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "101 E Markham St",
    # city: "Little Rock",
    # state: "AR",
    # zip_code: 72201,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "4211 Waialae Ave",
    # city: "Honolulu",
    # state: "HI",
    # zip_code: 96816,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "800 E Dimond Blvd",
    # city: "Anchorage",
    # state: "AK",
    # zip_code: 99515,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "1410 Museum Campus Dr",
    # city: "Chicago",
    # state: "IL",
    # zip_code: 60605,
    # phone: Faker::PhoneNumber.phone_number)

    # Charity.create!(
    # title: Faker::Company.name,
    # description: Faker::Company.catch_phrase,
    # url: Faker::Internet.url,
    # street_address: "500 S Capitol Ave",
    # city: "Indianapolis",
    # state: "IN",
    # zip_code: 46225,
    # phone: Faker::PhoneNumber.phone_number)

# disaster = ["earthquake", "hurricane", "tornado", "flood", "wild fire"]

# 10.times do
#   d = Disaster.new(
#     latitude: Faker::Address.latitude,
#     longitude: Faker::Address.longitude)
#   d.category = disaster.sample
#   d.save!
# end
    Charity.create!(
    title: "Academy of Friends",
    description: "Academy of Friends annually produces the world’s premier Academy Awards Night Charity Gala as the centerpiece of its efforts to raise funds, award donations, and encourage volunteerism that benefit a diverse set of HIV/AIDS direct care and prevention education agencies in the Bay Area.",
    url: Faker::Internet.url,
    street_address: "633 Folsom Street",
    city: "San Francisco",
    state: "CA",
    zip_code: 94110,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: "Food Runners",
    description: "The mission of Food Runners is to help alleviate hunger in SF, to help prevent waste, and to help create community. Food Runners currently delivers over 15 tons of food a week that would otherwise be thrown away. With help from their volunteer coordinator, paid truck driver, and community members, they can provide enough food for 3,000 meals a day in SF.",
    url: Faker::Internet.url,
    street_address: "927 Howard Street",
    city: "San Francisco",
    state: "CA",
    zip_code: 94103,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: "St. Anthony's",
    description: "The mission of St. Anthony Foundation is to feed, heal, shelter, clothe, lift the spirits of those in need, and create a society in which all people flourish. They are committed to providing the poor of SF with basic needs and services as a gateway to reclaiming their sense of dignity and progressing toward stability.",
    url: Faker::Internet.url,
    street_address: "1420 Jones Street",
    city: "San Francisco",
    state: "CA",
    zip_code: 94109,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: "San Francisco SPCA",
    description: "As the fourth oldest humane society in the U.S. and the founders of the No-Kill movement, the SF SPCA has always been at the forefront of animal welfare. As a result of our efforts and those of our community partners, San Francisco has the lowest euthanasia rate of any major city in the United States. No adoptable dog or cat in San Francisco goes without a home, even if they have medical or other issues.In 2014 we merged with Pets Unlimited, a likeminded animal welfare nonprofit in Pacific Heights. Their organization included a nonprofit veterinary hospital that provided significant financial assistance to pet guardians in need, as well as a small adoption center. The original SF SPCA campus in the Mission, and the additional campus in Pacific Heights, are now working toward the same shared mission and goals.We imagine a community where every animal has a loving home. Where animals don’t need the support of San Francisco’s rescues and shelters. And we know how to get there.
",
    url: Faker::Internet.url,
    street_address: "330 Ellis Street",
    city: "San Francisco",
    state: "CA",
    zip_code: 94102,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: "Habitat For Humanity",
    description: "At Habitat for Humanity Greater San Francisco our mission is to provide local families with a springboard to secure, stable futures through affordable homeownership, financial literacy and neighborhood revitalization. We believe that people should have safe, healthy, affordable places to live, play and grow. And we believe there’s power in numbers – and that by mobilizing our own neighbors, we can change people’s living situations for the better.",
    url: Faker::Internet.url,
    street_address: "330 Ellis Street",
    city: "San Francisco",
    state: "CA",
    zip_code: 94102,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: "SF Food Bank",
    description: "Our mission is to end hunger in San Francisco and Marin. It's a huge job that's only gotten harder as our community struggles with a prolonged period of economic distress and record numbers of people are pushed to the point of hunger. Thankfully, thousands of caring donors and supporters have rallied around the Food Bank and enabled us to scale up our operations to meet the need. With 130 employees, 25,000 volunteers each year, and 450 partner organizations throughout the community, the Food Bank is a vital lifeline for people in need of food assistance.
 ",
    url: Faker::Internet.url,
    street_address: "501 Haight Street",
    city: "San Francisco",
    state: "CA",
    zip_code: 94117,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: "Meals On Wheels of San Francisco",
    description: "Founded in 1970, MOWSF is a local, independent non-profit organization. MOWSF exists to alleviate the food insecurity and loneliness experienced by seniors who want to stay in their own homes but cannot shop or prepare meals for themselves. Our services are geared towards those with the greatest physical, social and economic need. The seniors we serve are frail, have limited ability to purchase or prepare meals, and have little or no support from family or caregivers. All of our clients are physically challenged due to a variety of conditions such as heart disease, cancer, vision loss, arthritis and diabetes. They are also confronted with the anxiety that the cost of living in San Francisco could outweigh their limited income.",
    url: Faker::Internet.url,
    street_address: "2109 Baker Street",
    city: "San Francisco",
    state: "CA",
    zip_code: 94115,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: "Central City Hospitality House",
    description: "To build community strength by advocating for policies and rendering services which foster self-sufficiency and cultural enrichment. Hospitality House encourages self-help, mutual respect, and increased self-esteem. The goal of these efforts is to make the heart of San Francisco a better place for us all.",
    url: Faker::Internet.url,
    street_address: "1235 Sansome Street",
    city: "San Francisco",
    state: "CA",
    zip_code: 94111,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: "Project Night Night",
    description: "Our mission is to provide free Night Night Packages to homeless children from birth to pre-teen who need our childhood essentials to have a concrete and predictable source of security and increased exposure to high-quality literacy materials during this time of  upheaval. Each Night Night Package contains a new security blanket, an age-appropriate children’s book, and a stuffed animal — all nestled inside of a new canvas tote bag.  Project Night Night works with tens of thousands of individuals each year who volunteer their time and talents to make our world a better place.

",
    url: Faker::Internet.url,
    street_address: "2851 21st Street",
    city: "San Francisco",
    state: "CA",
    zip_code: 94110,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: "Aim High",
    description: "Our model aims to close the opportunity and achievement gaps for low-income middle school students by offering an engaging, supportive, and tuition-free summer learning program.   The Aim High experience fosters critical thinking, instills academic habits of mind, and cultivates a love of learning. Our academic classes reinforce what students have learned in the previous school year, and prepare them to succeed in the school year ahead.  Students attend classes in Math, Science, Humanities, and Issues & Choices, Aim High’s unique adolescent development and leadership class.  In the afternoon, students participate in elective activities such as art, drama, and sports. We provide small class sizes, student support specialists, and free, healthy lunches and snacks so that students are at optimum capacity to be fully engaged in the classroom. Students typically participate for three or four summers, and many return to teach in the program.  Aim High continually evaluates feedback, assesses results, and shares best practices in order to deliver a high-quality program to our students.",
    url: Faker::Internet.url,
    street_address: "812 Castro Street",
    city: "San Francisco",
    state: "CA",
    zip_code: 94114,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: "Holy Apostles Soup Kitchen",
    description: "As New York’s largest emergency food program, Holy Apostles Soup Kitchen serves a hearty and nutritious meal to more than 1,000 homeless and hungry New Yorkers like Elizabeth every day.We recognize the hunger in our city beyond the need for food. At Holy Apostles we offer our guests refuge from the streets, a safe place they feel welcomed, connection to additional services and food for the soul as well as the body.In over 30 years we have never missed a serving day and we have never turned anyone away from our door.",
    url: Faker::Internet.url,
    street_address: "503 Broadway",
    city: "New York",
    state: "NY",
    zip_code: 10012,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: Faker::Company.name,
    description: "Food First, Inc is a 501(c)(3) not for profit organization that is committed to enhancing the quality of life for disadvantaged people by taking a proactive role to ensure that they are provided with essential goods and services.At Conover House, Food First Inc. provides supportive housing to families living with HIV/AIDS. Conover House is a congregate housing program funded by Human Resources Administration (H.A.S.A Division). At Conover House we have a F/T Social Work Supervisor, F/T Case Manager, P/T Case Manager and Group Facilitator, P/T Recreational Specialist, P/T Nutritionist and a P/T Cook on site.",
    url: Faker::Internet.url,
    street_address: "703 10th Avenue",
    city: "New York",
    state: "NY",
    zip_code: 10036,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: Faker::Company.name,
    description: Faker::Company.catch_phrase,
    url: Faker::Internet.url,
    street_address: "78 4th Avenue",
    city: "Brooklyn",
    state: "NY",
    zip_code: 11238,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: Faker::Company.name,
    description: Faker::Company.catch_phrase,
    url: Faker::Internet.url,
    street_address: "615 West 7th",
    city: "Austin",
    state: "TX",
    zip_code: 78701,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: Faker::Company.name,
    description: Faker::Company.catch_phrase,
    url: Faker::Internet.url,
    street_address: "200 San Marcos Street",
    city: "Austin",
    state: "TX",
    zip_code: 78702,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: Faker::Company.name,
    description: Faker::Company.catch_phrase,
    url: Faker::Internet.url,
    street_address: "231 East Third Street",
    city: "Los Angeles",
    state: "CA",
    zip_code: 90013,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: Faker::Company.name,
    description: Faker::Company.catch_phrase,
    url: Faker::Internet.url,
    street_address: "320 West Fourth Street",
    city: "Los Angeles",
    state: "CA",
    zip_code: 90013,
    phone: Faker::PhoneNumber.phone_number)

    Charity.create!(
    title: Faker::Company.name,
    description: Faker::Company.catch_phrase,
    url: Faker::Internet.url,
    street_address: "701 North Hill Street",
    city: "Los Angeles",
    state: "CA",
    zip_code: 90012,
    phone: Faker::PhoneNumber.phone_number)

    Disaster.create!(
    latitude: 37.77,
    longitude: -122.41,
    category: "Earthquake")

    Disaster.create!(
    latitude: 40.71,
    longitude: -74.01,
    category:"Hurricane")

    Disaster.create!(
    latitude: 34.1,
    longitude: -118.24,
    category: "Earthquake")

    Disaster.create!(
    latitude: 30.26,
    longitude: -97.74,
    category:"Tornado")

30.times do
  Donation.create!(
    user_id: rand(1..10),
    charity_id: rand(1..13),
    disaster_id: rand(1..10),
    amount: rand(1..100))
end
