# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = {username:'guest',
  password:'password',
  description:'guest account',
  profile_image_url:'https://res.cloudinary.com/deeptailor/image/upload/v1478189787/guest_le1jtm.png'
}

User.create(guest);
