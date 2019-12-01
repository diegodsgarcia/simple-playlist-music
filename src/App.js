import React from 'react'
import Player from './components/player'

import Global from './styles/global'

const playlist = [{
  name: 'Kirby 64',
  author: 'Nintendo 64',
  image: './images/kirby.jpg',
  source: './music/kirby.ogg'
}]

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
