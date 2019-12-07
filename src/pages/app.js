import React, { useState } from 'react'
import Player from '../components/player'

import Global from '../styles/global'

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
  const [music, setMusic] = useState(playlist[0])
  const [hasPrev, setHasPrev] = useState(false)
  const [hasNext, setHasNext] = useState(true)

  return (
    <div className="app">
      <Global />
      <Player
        name={music.name}
        author={music.author}
        image={music.image}
        source={music.source}
        onNext={onNext}
        onPrev={onPrev}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
    </div>
  );

  function onNext({ playing }) {
    const nextMusic = playlist[playlist.indexOf(music) + 1]
    setHasPrev(true)
    setHasNext(!!nextMusic)
    
    if (nextMusic) {
      setMusic(nextMusic)
    }
  }

  function onPrev({ playing }) {
    const prevMusic = playlist[playlist.indexOf(music) - 1]
    setHasNext(true)
    setHasPrev(!!prevMusic)

    if (prevMusic) {
      setMusic(prevMusic)
    }
  }


}

export default App;
