# Component Heirarchy

## App level

**AppContainer**
 - Sidebar
  + SidebarItems
  + SidebarPlaylistIndexContainer
  + SignedOutContent
 - PlayContainer

**AuthFormContainer**
 - SignupForm
 - SigninForm

**SidebarPlaylistIndexContainer**
 - SidbarIndex
  + SidebarPlaylistLinks
 - AddPlaylistButtonContainer
  + AddPlaylistButton

**PlaylistFormContainer**
 - PlaylistForm

##Browse

**AppContainer**
 -BrowseNav

**SongsIndex**
 - SongsIndexItemContainer

**SongsIndexItemContainer**
 - SongsIndexItem
 - SongToolsContainer

**SongTools**
 - Edit track button
 - Delete track button

**AddSongToPlaylistFromContainer**
 - AddSongToPlaylistForm

**PlaylistIndex**
 - PlaylistIndexItemContainer

**PlaylistIndexItemContainer**
 - PlaylistIndexItem

##View Playlist

**PlaylistDetailContainer**
 - PlaylistDetail
  + PlaylistSongsIndex
   *  PlaylistSongsIndexItemContainer
  + PlaylistToolsCotainer


**PlayListToolsContainer**
 - EditPlaylistButton
 - DeletePlaylistButton

**PlaylistFormContainer**
 - PlaylistForm

**PlaylistSongsIndexItemContainer**
 - PlaylistSongsIndexItem

##Follow

**AppContainer**
- FollowNav
- UserIndex
 + UserIndexItemCotainer

**UserIndexItemContainer**
 - UserIndexItem

##Your Songs

**SongsIndex**
 - SongsIndexItemContainer
 - SongFormContainer

**SongsIndexItemContainer**
 - SongsIndexItem

##Account / View User

**AppContainer**
 - UserDetailContainer
 - PlaylistIndex


**UserDetailContainer**
 - UserDetail
  + UserToolsContainer
  + SignoutButton

**UserToolsContainer**
 - EditUserButton

**UserFormContainer**
 - UserForm

##Playing Songs

**PlayBarContainer**
 - PlayBar
   + CurrentSongDisplay
   + CurrentSongControlsContainer
   + CurrentSongProgressBarContainer

**CurrentSongControlsContainer**
 - PlayButton
 - ForwardButton
 - BackButton

**CurrentSongProgressBarContainer**
  - CurrentSongProgressBar

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "Homepage" |
| "/browse/songs" | "SongsIndex" |
| "/browse/playlists" | "PlaylistsIndex" |
| "/follow/friends" | "UserIndex" |
| "/follow/find-friends" | "UserIndex" |
| "/users/:user_id" | "UserDetailContainer" |
| "/users/:user_id/edit" | "UserDetailsFormContainer" |
| "/your-tracks" | "SongsIndex" |
| "/your-tracks/new" | "SongFormContainer" |
| "/playlist/:playlist_id" | "PlaylistDetailContainer" |
| "/playlist/:playlist_id/edit" | "PlaylistFormContainer" |
| "/playlist/new" | "NewPlaylistFormContainer" |
