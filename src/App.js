import React from 'react'
import Player from './components/player'

import Global from './styles/global'

function App() {
  const playlist = [{
    name: 'Kirby',
    source: './music/kirby.ogg'
  }]

  return (
    <div className="app">
      <Global />
      <Player source={playlist[0].source} />
    </div>
  );


}

export default App;
