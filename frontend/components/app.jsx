import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import AudioPlayer from './audio-player/audio-player';

const App = ({ children }) => (
  <div className="app-container">
    <GreetingContainer/>
    {children}
    <AudioPlayer/>
  </div>
);

export default App;
