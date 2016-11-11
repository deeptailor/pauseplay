# Pauseplay

[Pauseplay live][prodlink]

Pauseplay is a full-stack web application that lets users stream, and share their favorite songs. Inspired by Spotify, it is built on a Rails backend with a PostgreSQL database, and it uses React.js with a Redux architectural framework on the frontend.  

![Pauseplay home page: http://www.pauseplay.us][home page]

## Features & Implementation

###Continuous audio streaming

Users can Continuously stream audio while navigating around the site. This is largely due to Pauseplay's frontend architecture; it is a single-page web app that dynamically renders React components. The audio player, as well as the sound itself, are simply React components that persist as users move throughout the site.

Audio playback is controlled on the frontend via an `AudioPlayer` React component, which allows for standard audio control options, like playing and pausing, going backward and forward. Users can also play a song by clicking a play button in the `SongIndexItem`.

The currently playing song, the play status (playing, paused, etc), and upcoming songs are stored in the Redux store.

![Pauseplay songs page: http://www.pauseplay.us][audio]


###Playlist creation and deleting

Users can organize tracks into playlists. Playlists are stored in a playlist table that has a playlist's `id`, `title`, `description` and image url. Playlists are associated with songs via a playlistSongs join table that tracks a `playlist_id` and a `song_id`. The join table is indexed on `playlist_id` to make it fast to fetch all of the tracks for a playlist.

On the frontend, users can see Playlists in a `PlaylistIndex`, which shows a playlist's name, picture and user, as well as in a `PlaylistDetail`, which also shows the Playlist's songs. Clicking on a `PlaylistSongIndexItem` in a playlist starts playing the playlist from that song.

Clicking an "Add to Playlist" button on a `SongIndexItem` opens a popup that let's a user add the song to any playlist that they've created via API calls.

![Pauseplay songs page: http://www.pauseplay.us/#/playlists/1][playlist_detail]

###Following playlists

Users can follow playlists. Following other playlists add those playlists to the "Followed Playlists" tab.

On the backend, these follows are handled by a PlaylistFollows join table, which track `user_id` and `playlist_id`. The tables are indexed on `user_id` to make it quick to fetch the playlists the currently signed in user follows.

Custom API calls are made when users click 'follow' and 'unfollow' links on the frontend that create and destroy these follow associations.

![Pauseplay tracks page: http://www.pauseplay.com/][playlist_follows]


###User Experience

One of the primary goals of this project was to create a smooth, desktop-app like user experience in the browser. This was largely accomplished via the React/Redux architectural pattern, which made full page refreshes completely unnecessary.

Further, when a user signs in, some key information &mdash; like created playlists and their corresponding tracks &mdash; is pre-fetched and loaded into the application's state. Because of this, AJAX requests are not needed when users perform certain common actions (e.g opening a playlist that they created) making those actions near instantaneous.

Some user testing was also completed to fine-tune application layout and interactions.

##Future directions

Pauseplay was designed and built in under 2 weeks, and as such there's still a lot of room for expansion. Future steps for the project are outlined below.


###Mobile responsive design

Currently only a few of Pauseplay's components are optimized for the mobile experience. I'd like to make the app fully responsive by first adding targeted media queries for basic app components (e.g. `Header`, `AudioPlayer`, etc...), and then by using flexbox for more of the app's content.

###Song Tagging

I'd like to expand Pauseplay's song categorization system to be a more robust tagging system that would apply to both songs and playlists. I'd accomplish this through a Tags table and a polymorphic Taggings joins table, which would take in a `taggable_id` which could apply to either a song or playlist, as well as `taggable_type`. These taggings could be used to improve the site's search functionality.


This would of course require storing additional information, like speech location and speech date in the tracks table.

[prodlink]: http://www.pauseplay.us
[home page]: ./docs/images/home.png "Pauseplay home page"
[audio]: ./docs/images/audio.png "Pauseplay audio player"
[playlist_detail]: ./docs/images/playlist_detail.png "Playlist detail page"
[playlist_follows]: ./docs/images/playlist_follows.png "Playlists follows page"
