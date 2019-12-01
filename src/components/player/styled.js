import styled from 'styled-components'
import { LeftArrow } from 'styled-icons/boxicons-solid/LeftArrow'
import { RightArrow } from 'styled-icons/boxicons-solid/RightArrow'
import { PlayCircle } from 'styled-icons/feather/PlayCircle'
import { PauseCircle } from 'styled-icons/feather/PauseCircle'

const Wrapper = styled.div`
  .buttons, .actions {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

const Play = styled(PlayCircle)`

`

const Pause = styled(PauseCircle)`

`

const Prev = styled(LeftArrow)`

`

const Next = styled(RightArrow)`

`

const Slider = styled.div`
  position: relative;
  width: 500px;
  height: 20px;

  input {
    appearance: none;
    width: 100%;
    height: 100%;
    background: #d3d3d3;
    outline: none;

    &::-webkit-slider-thumb {
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #000;
      cursor: pointer;
    }
  }

`

export { Wrapper, Slider, Prev, Next, Play, Pause, Button }
