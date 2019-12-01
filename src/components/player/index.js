import React, { useState } from 'react'
import * as S from './styled'

export default function Player({source}) {
  const player = new Audio()
  player.src = source

  const [sliderValue, setSliderValue] = useState()
  const [playing, setPlaying] = useState(false)

  return (
    <S.Wrapper>
      <div className="buttons">
        <S.Button onClick={play}>
          <S.Prev  />
        </S.Button>
          <S.Slider>
            <input onChange={(event) => setSliderValue(event.value)} type="range" min="1" max="100" value={sliderValue} />
          </S.Slider>
        <S.Button onClick={pause}>
          <S.Next />
        </S.Button>
      </div>

      <div className="actions">
        {!playing && 
        <S.Button onClick={play}>
          <S.Play />
        </S.Button>
        }

        {playing &&
        <S.Button onClick={pause}>
          <S.Pause />
        </S.Button>
        }
      </div>
    </S.Wrapper>
  )

  function play() {
    setPlaying(true)
    player.play()
  }

  function pause() {
    setPlaying(false)
    player.pause()
  }
  
}
