import React from 'react'
import Player from './components/player'

import Global from './styles/global'

const playlist = [
  {
    name: 'Kirby 64',
    author: 'Nintendo 64',
    image: './images/kirby.jpg',
    source: './music/kirby.ogg'
  },
  {
    name: 'Castlevania Shyphonia of the Night',
    author: 'PS1',
    image: './images/castlevania.jpg',
    source: './music/castlevania.ogg'
  },
  {
    name: 'Mario 64',
    author: 'Nintendo 64',
    image: './images/mario-64.jpg',
    source: './music/mario-64.ogg'
  },
  {
    name: 'Mario Land',
    author: 'Nintendo',
    image: './images/mario-land.jpg',
    source: './music/mario-land.ogg'
  },
  {
    name: 'Pokemon',
    author: 'Nintendo',
    image: './images/pokemon.jpg',
    source: './music/pokemon.ogg'
  },
  {
    name: 'Zelda Ocarina of Time',
    author: 'Nintendo 64',
    image: './images/zelda.jpg',
    source: './music/zelda.ogg'
  },
]

function App() {
  const [{name, author, image, source}] = playlist
  return (
    <div className="app">
      <Global />
      <Player
        name={name}
        author={author}
        image={image}
        source={source}
        onNext={onNext}
        onPrev={onPrev} 
      />
    </div>
  );

  function onNext() {
    
  }

  function onPrev() {

  }


}

export default App;
