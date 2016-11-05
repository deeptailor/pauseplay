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
User.create({username:'prina', password:'password123', description:'Founders Wife'})
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

Song.create({album_id:1, title:'Welcome To New York', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324806/01_Welcome_To_New_York_cmq6as.mp3'})
Song.create({album_id:1, title:'Blank Space', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324814/02_Blank_Space_fevic3.mp3'})
Song.create({album_id:1, title:'Style', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324814/03_Style_qbv47l.mp3'})
Song.create({album_id:1, title:'Out Of The Woods', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324815/04_Out_Of_The_Woods_ms6y0c.mp3'})
Song.create({album_id:1, title:'All You had To Do Was Stay', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324809/05_All_You_Had_To_Do_Was_Stay_y9jdak.mp3'})
Song.create({album_id:1, title:'Shake It Off', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324783/06_Shake_It_Off_angaso.mp3'})
Song.create({album_id:1, title:'I Wish You Would', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324849/07_I_Wish_You_Would_cvsudq.mp3'})
Song.create({album_id:1, title:'Bad Blood', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324867/08_Bad_Blood_aejm9g.mp3'})
Song.create({album_id:1, title:'Wildest Dreams', audio_url:'http://res.cloudinary.com/deeptailor/video/upload/v1478324892/09_Wildest_Dreams_ghnajb.mp3'})
Song.create({album_id:1, title:'How You Get The Girl', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324912/10_How_You_Get_The_Girl_fheumo.mp3'})
Song.create({album_id:1, title:'This Love', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324913/11_This_Love_rdozn1.mp3'})
Song.create({album_id:1, title:'I Know Places', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324888/12_I_Know_Places_lreguc.mp3'})
Song.create({album_id:1, title:'Clean', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324947/13_Clean_rblwpl.mp3'})
Song.create({album_id:1, title:'Wonderland', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324945/14_Wonderland_vhsrbz.mp3'})
Song.create({album_id:1, title:'You Are In Love', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324977/15_You_Are_In_Love_mo82xh.mp3'})
Song.create({album_id:1, title:'New Romantics', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324975/16_New_Romantics_tcytjs.mp3'})

Song.create({album_id:2, title:'Run Away', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478324584/RunAway-Arjun.mp3'})
