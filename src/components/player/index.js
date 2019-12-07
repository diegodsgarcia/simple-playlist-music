import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as PlaylistActions from '../../store/playlist/actions'
import * as S from './styled'

const player = new Audio();

function Player({ name, author, image, source, onNext, onPrev, hasPrev, hasNext, playing, playMusic }) {
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    player.src = source

    if (playing) {
      player.play()
    }
  }, [source, playing])

  return (
    <S.Wrapper>
      {image &&
        <S.Figure>
          <img src={image} alt={name} />
        </S.Figure>
      }

      <div className="description">
        <h3 className="name">{name}</h3>
        <p className="author">{author}</p>
      </div>

      <div className="actions">
        <S.Button disabled={!hasPrev} onClick={onPrev.bind(this, { playing })}>
          <S.Prev />
        </S.Button>


        {!playing &&
          <S.MainButton onClick={onPlay}>
            <S.Play />
          </S.MainButton>
        }

        {playing &&
          <S.MainButton onClick={onPause}>
            <S.Pause />
          </S.MainButton>
        }

        <S.Button disabled={!hasNext} onClick={onNext.bind(this, { playing })}>
          <S.Next />
        </S.Button>
      </div>

      <div className="config">
        <S.Button onClick={onMute}>
          {!muted && <S.VolumeFull />}
          {muted && <S.VolumeMute />}
        </S.Button>
      </div>
    </S.Wrapper>
  )

  function onPlay() {
    playMusic(true)
    player.play()
  }

  function onPause() {
    playMusic(false)
    player.pause()
  }

  function onMute() {
    setMuted(!muted)
    player.muted = !muted
  }
}

const mapStateToProps = ({playlist}) => ({
  playing: playlist.playing,
  hasPrev: playlist.hasPrev,
  hasNext: playlist.hasNext,
})

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch)

Player.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string,
  source: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
