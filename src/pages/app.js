import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Player from '../components/player'
import List from '../components/list'

import Global from '../styles/global'

import * as  PlaylistActions from  '../store/playlist/actions'

function App({ playlist, music, setMusic, hasNext, hasPrev, setPrev, setNext }) {

  return (
    <div className="app">
      <Global />
      <List musics={playlist} onItemClick={onMusicSelected} />
      <Player
        name={music.name}
        author={music.author}
        image={music.image}
        source={music.source}
        onNext={onNext}
        onPrev={onPrev}
      />
    </div>
  );

  function onNext() {
    const nextMusic = playlist[playlist.indexOf(music) + 1]
    setPrev(true)
    setNext(!!nextMusic)
    
    if (nextMusic) {
      setMusic(nextMusic)
    }
  }

  function onPrev() {
    const prevMusic = playlist[playlist.indexOf(music) - 1]
    setNext(true)
    setPrev(!!prevMusic)

    if (prevMusic) {
      setMusic(prevMusic)
    }
  }

  function onMusicSelected(music) {
    setMusic(music);
  }
}

const mapStateToProps = ({playlist}) => ({
  music: playlist.musicSelected,
  playlist: playlist.playlist,
  playing: playlist.played,
})

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
