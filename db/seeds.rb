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
Artist.create({name:'Zack Knight', profile_image_url:'https://res.cloudinary.com/deeptailor/image/upload/c_thumb,g_face:center,h_250,w_250/v1478499016/album_art/zack_knight.png'})
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
Album.create({name:'Queen', artist_id:6, album_art_url:'https://res.cloudinary.com/deeptailor/image/upload/v1478499365/album_art/zackknight-queen.png'})

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

Song.create({album_id: 3, title: 'A Head Full Of Dreams', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468257/coldplay-headfullofdreams/01_coldplay_-_a_head_full_of_dreams_yftm7w.mp3'})
Song.create({album_id: 3, title: 'Birds', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468269/coldplay-headfullofdreams/02_coldplay_-_birds_q6ipdo.mp3'})
Song.create({album_id: 3, title: 'Hymn For the Weekend ft. Beyonce', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468305/coldplay-headfullofdreams/03_coldplay_ft._beyonce_-_hymn_for_the_weekend_o4zghm.mp3'})
Song.create({album_id: 3, title: 'Everglow', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468280/coldplay-headfullofdreams/04_coldplay_-_everglow_ccchpz.mp3'})
Song.create({album_id: 3, title: 'Adventure Of A Lifetime', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468290/coldplay-headfullofdreams/05_coldplay_-_adventure_of_a_lifetime_qlupy2.mp3'})
Song.create({album_id: 3, title: 'Fun ft. Tove Lo', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468327/coldplay-headfullofdreams/06_coldplay_ft._tove_lo_-_fun_ntfjgv.mp3'})
Song.create({album_id: 3, title: 'Kaleidoscope', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468290/coldplay-headfullofdreams/07_coldplay_-_kaleidoscope_wdfpqq.mp3'})
Song.create({album_id: 3, title: 'Army Of One', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468351/coldplay-headfullofdreams/08_coldplay_-_army_of_one__incl._x_marks_the_spot_ipt9js.mp3'})
Song.create({album_id: 3, title: 'Amazing', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468336/coldplay-headfullofdreams/09_coldplay_-_amazing_day_pvgunu.mp3'})
Song.create({album_id: 3, title: 'Colour Spectrum', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468314/coldplay-headfullofdreams/10_coldplay_-_colour_spectrum_pvexus.mp3'})
Song.create({album_id: 3, title: 'Up And Up', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478468356/coldplay-headfullofdreams/11_coldplay_-_up_and_up_mxubrh.mp3'})

Song.create({album_id: 5, title:'Keep The Family Close', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495462/drake-views/01_Keep_the_Family_Close.m4a'})
Song.create({album_id: 5, title:'9', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495592/drake-views/02_9.m4a'})
Song.create({album_id: 5, title:'You With Me', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495460/drake-views/03_U_With_Me_.m4a'})
Song.create({album_id: 5, title:'Feel No Ways', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495516/drake-views/04_Feel_No_Ways.m4a'})
Song.create({album_id: 5, title:'Hype', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495512/drake-views/05_Hype.m4a'})
Song.create({album_id: 5, title:'Weston Road Flows', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495501/drake-views/06_Weston_Road_Flows.m4a'})
Song.create({album_id: 5, title:'Redemption', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495548/drake-views/07_Redemption.m4a'})
Song.create({album_id: 5, title:'With you ft. PARTYNEXTDOOR', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495560/drake-views/08_With_You_feat._PARTYNEXTDOOR.m4a'})
Song.create({album_id: 5, title:'Faithful ft. Pimp C', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495549/drake-views/09_Faithful_feat._Pimp_C_dvsn.m4a'})
Song.create({album_id: 5, title:'Still Here', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495613/drake-views/10_Still_Here.m4a'})
Song.create({album_id: 5, title:'Controlla', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495613/drake-views/11_Controlla.m4a'})
Song.create({album_id: 5, title:'One Dance ft. Wiz Kid Kyla', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495593/drake-views/12_One_Dance_feat._Wizkid_Kyla.m4a'})
Song.create({album_id: 5, title:'Grammys ft. Future', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495587/drake-views/13_Grammys_feat._Future.m4a'})
Song.create({album_id: 5, title:'Childs Play', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495614/drake-views/14_Childs_Play.m4a'})
Song.create({album_id: 5, title:'Pop Style', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495611/drake-views/15_Pop_Style.m4a'})
Song.create({album_id: 5, title:'Too Good ft. Rihanna', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495450/drake-views/16_Too_Good_feat._Rihanna.m4a'})
Song.create({album_id: 5, title:'Summers Over (Interlude)', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495398/drake-views/17_Summers_Over_Interlude.m4a'})
Song.create({album_id: 5, title:'Fire Desire', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495442/drake-views/18_Fire_Desire.m4a'})
Song.create({album_id: 5, title:'Views', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495537/drake-views/19_Views.m4a'})
Song.create({album_id: 5, title:'Hotline Bling', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478495458/drake-views/20_Hotline_Bling.m4a'})

Song.create({album_id: 6, title:'Bollywood Medley 1', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499239/zackknight/Bollywood_Medley_Pt_1.mp3'})
Song.create({album_id: 6, title:'Bollywood Medley 2', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499242/zackknight/Bollywood_Medley_Pt_2.mp3'})
Song.create({album_id: 6, title:'Candy ft. Punjabi MC', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499231/zackknight/Candy_Punjabi_MC_Remix.mp3'})
Song.create({album_id: 6, title:'Do It Again Pia Mia Remix', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499223/zackknight/Do_It_Again_Pia_Mia_Remix.mp3'})
Song.create({album_id: 6, title:'Lamhe', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499206/zackknight/Lamhe.mp3'})
Song.create({album_id: 6, title:'Looking For Love ft. Arijit Singh', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499211/zackknight/Looking_For_Love_Main_Dhoondne_ft._Arijit_Singh.mp3'})
Song.create({album_id: 6, title:'Main Aur Tum', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499238/zackknight/Main_Aur_Tum.mp3'})
Song.create({album_id: 6, title:'Nakhre', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499237/zackknight/Nakhre.mp3'})
Song.create({album_id: 6, title:'Queen ft. Raxstar', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499210/zackknight/Queen_ft._Raxstar.mp3'})
Song.create({album_id: 6, title:"When I'm Gone", audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499221/zackknight/When_I_m_Gone.mp3'})
Song.create({album_id: 6, title:'Your Name', audio_url:'https://res.cloudinary.com/deeptailor/video/upload/v1478499202/zackknight/Your_Name_Bhooladiya.mp3'})
