import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AudioPlayerContainer from './audio-player/audio-player-container';

const App = ({ children }) => (
  <div className="app-container">
    <GreetingContainer/>
    {children}
    <AudioPlayerContainer />
  </div>
);

export default App;
