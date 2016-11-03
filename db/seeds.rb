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
User.create({username:'deeptailor', password:'password123', description:'Founder', profile_image_url:"http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/477/medium/Deep_Tailor.jpg?1474325077"})
User.create({username:'archna', password:'password', description:'Sister'})
User.create({username:'craig', password:'password', description:'Brother In-law'})
User.create({username:'akshay', password:'password', description:'cousin'})
User.create({username:'jiten', password:'password', description:'cousin'})
User.create({username:'parul', password:'password', description:'cousin'})
User.create({username:'suheil', password:'password', description:'cousin'})
User.create({username:'bhavna', password:'password', description:'mother'})
User.create({username:'kalpna', password:'password', description:'aunt'})
User.create({username:'sonikjhang', password:'password', description:'friend'})
User.create({username:'arvind', password:'password', description:'uncle'})
User.create({username:'henryhsu', password:'password', description:'friend'})
User.create({username:'sebastiencruz', password:'password', description:'friend'})
User.create({username:'jamiepreston', password:'password', description:'celebrity'})
User.create({username:'taylorswift', password:'password', description:'celebrity'})
User.create({username:'kingjames', password:'password', description:'celebrity'})
User.create({username:'kinggoldchains', password:'password'})
User.create({username:'kianadavid', password:'password'})
User.create({username:'derrickrose', password:'password'})


Artist.create({name:'Taylor Swift', profile_image_url:'http://res.cloudinary.com/deeptailor/image/upload/c_scale,q_61,w_400/v1478200378/taylor_swift_zqloxc.png'})
Artist.create({name:'Arjun', profile_image_url:'https://res.cloudinary.com/deeptailor/image/upload/c_crop,g_face,h_400,q_70,w_400/v1478200375/arjun_ume7ov.png'})
Artist.create({name:'Coldplay', profile_image_url:'http://res.cloudinary.com/deeptailor/image/upload/c_crop,g_faces,h_400,w_400/v1478200375/coldplay_elsiqy.png'})
Artist.create({name:'Rihanna', profile_image_url:'http://res.cloudinary.com/deeptailor/image/upload/c_lfill,g_face,h_400,w_400/v1478200375/rihanna_uygri0.png'})
Artist.create({name:'Drake', profile_image_url:'https://res.cloudinary.com/deeptailor/image/upload/c_lfill,g_face,h_400,w_400/v1478200374/drake_yjimbx.png'})
Artist.create({name:'Tyga', profile_image_url:'https://res.cloudinary.com/deeptailor/image/upload/c_lfill,g_face,h_400,w_400/v1478200374/tyga_cvuqhp.png'})
# Artist.create({name:, profile_image_url:})
# Artist.create({name:, profile_image_url:})
# Artist.create({name:, profile_image_url:})
# Artist.create({name:, profile_image_url:})
# Artist.create({name:, profile_image_url:})

Album.create({name:'1989', artist_id:1, album_art_url:'https://res.cloudinary.com/deeptailor/image/upload/c_scale,h_400,w_400/v1478206061/album_art/taylorswift-1989_wdax7m.png'})
Album.create({name:'Run Away', artist_id:2, album_art_url:'https://res.cloudinary.com/deeptailor/image/upload/c_scale,w_400/v1478206061/album_art/arjun-runaway_ge9hja.png'})
Album.create({name:'Head Full Of Dreams', artist_id:3, album_art_url:'https://res.cloudinary.com/deeptailor/image/upload/c_scale,w_400/v1478206061/album_art/coldplay-headfullofdreams_nw4f7g.png'})
Album.create({name:'Anti', artist_id:4, album_art_url:'https://res.cloudinary.com/deeptailor/image/upload/c_scale,w_400/v1478206061/album_art/rihanna-anti_hyujv2.png'})
Album.create({name:'Views', artist_id:5, album_art_url:'https://res.cloudinary.com/deeptailor/image/upload/c_scale,w_400/v1478206061/album_art/drake-views_z58rjr.png'})
Album.create({name:'Hotel California', artist_id:6, album_art_url:'https://res.cloudinary.com/deeptailor/image/upload/c_scale,w_400/v1478206061/album_art/tyga-hotelcalifornia_vh51lz.png'})
