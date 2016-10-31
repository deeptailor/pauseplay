# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
description     | text      |
profile_image_url   | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## artists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed
profile_image_url | integer   | not null

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed
profile_image_url | integer   | not null
artist_id | integer   | not null, foreign key(references artists)


## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
album_id      | integer    | not null, foreign key (references albums)
track_image_url   | string    |
audio_url   | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed


## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null,
description | text      | not null
owner_id     | integer   | not null, foreign key (references users), indexed
public      | boolean   | not null, default: false
playlist_image_url   | string    |

## playlist_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer    | not null, foreign key (references users), indexed
playlist_id | integer   | not null, foreign key (references playlists), indexed

## playlist_songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
playlist_id | integer   | not null, foreign key (references playlists), indexed
song_id    | integer   | not null, foreign key (references songs), indexed

## user_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed
