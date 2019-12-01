import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

let player

export default function Player({name, author, image, source, onNext, onPrev}) {

  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    player = new Audio()
    player.src = source
  }, [source])

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
        <S.Button onClick={onPrev}>
          <S.Prev  />
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
   

        <S.Button onClick={onNext}>
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
    setPlaying(true)
    player.play()
  }

  function onPause() {
    setPlaying(false)
    player.pause()
  }

  function onMute() {
    setMuted(!muted)
    player.muted = !muted
  }
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  image: PropTypes.string,
  source: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
}
