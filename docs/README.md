# Pauseplay

[Heroku link][heroku]

[Trello link][trello]

[heroku]: https://pauseplay.herokuapp.com/
[trello]: https://trello.com/b/CR4IYhzI/pauseplay

## Minimum Viable Product

Pauseplay is a web application inspired by Spotify built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Audio song selection
- [ ] Playlist creation, deletion and updating
- [ ] Continuous audio streaming while navigating
- [ ] Following Playlists
- [ ] Following other users
- [ ] Production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 days)

**Objective:** Functioning rails project with front-end Authentication

- [x] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password)
- [x] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] Sidebar component (signed out content only)
- [ ] User signup/signin components
- [ ] UserDetail component for currentUser on account tab
- [ ] Style signup/signin components
- [ ] Seed users
- [ ] Review phase 1

### Phase 2: Songs Model, API, and components (2 days)

**Objective:** Homepage, Songs selected, and viewed on the index page.

- [ ] Homepage
- [ ] `Song` model
- [ ] Audio file hosting (AWS?)
- [ ] Image file hosting (AWS?)
- [ ] Seed database with a small amount of test data
- [ ] JBuilder views for songs
- Song components and respective Redux loops
  - [ ] `Sidebar`
  - [ ] `SongsIndex`
  - [ ] `SongIndexItem`
- [ ] Style songs components
- [ ] Seed songs

### Phase 3: Playlists and playlist follows (2 days)

**Objective:** Playlists can be created, destroyed, followed, and unfollowed. Songs can be added to and removed from playlists.

- [ ] `Playlist` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for playlists (`PlaylistsController`)
- [ ] JBuilder views for playlists
- [ ] Fetching playlists for the current user
- [ ] Adding and removing songs from playlists
- Playlist components and respective Redux loops
  - [ ] `PlaylistIndex`
  - [ ] `PlaylistIndexItem`
  - [ ] `PlaylistSongsIndex`
  - [ ] `PlaylistSongsIndexItem`
  - [ ] `PlaylistForm `
  - [ ] `PlaylistDetail `
  - [ ] `AddSongToPlaylist form `
- [ ] Style playlist components
- [ ] Seed playlists
- [ ] `PlaylistFollow` model
- [ ] Seed database with a small amount of test data
- [ ] Create destroy API for playlists (`PlaylistsController`)
- [ ] Add buttons for following / unfollowing playlists

### Phase 4: Streaming audio (2 days)

**Objective:** Audio can be streamed Continuously while navigating the site
- [ ] Research streaming Audio
- [ ] Current song Redux cycles and reducer
- [ ] Current song components
  - [ ] `PlayBar`
  - [ ] `CurrentSongDisplay`
  - [ ] `CurrentSongControlsContainer`
  - [ ] `CurrentSongProgressBar`
- [ ] Styling for audio components

### Phase 5: Follow Users / updating current user (1 day)

**Objective:** Users can browse and follow other users.

- [ ]`UserFollow` model
- [ ] Create destroy API for follows (`UsersController`)
- Related components
  - [ ] `UserIndex`
  - [ ] `UserDetail`
  - [ ] `UserForm`
- Styling for components


### Bonus Features (TBD)
- [ ] Search for songs and playlists on search tab
- [ ] Song categorization
- [ ] Play Queue
