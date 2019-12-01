import styled from 'styled-components'
import { SkipNext } from 'styled-icons/material/SkipNext'
import { SkipPrevious } from 'styled-icons/material/SkipPrevious'
import { PlayCircle } from 'styled-icons/fa-solid/PlayCircle'
import { PauseCircle } from 'styled-icons/fa-solid/PauseCircle'
import { VolumeFull as StyledVolumeFull } from 'styled-icons/boxicons-solid/VolumeFull'
import { VolumeMute as StyledVolumeMute } from 'styled-icons/boxicons-solid/VolumeMute'

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 90px;
  bottom: 0;
  box-shadow: 0 0 8px rgba(0,0,0,.4);

  .actions, .config {
    display: flex;
    align-items: center;
  }

  .actions {
    justify-content: center;
    width: 60%;

    > * {
      margin: 0 .5rem;
    }
  }

  .config {
    width: 20%;
    padding: 0 1rem;
    justify-content: flex-end;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    padding: 0 1rem;
  }
`

const Figure = styled.figure`
  width: 90px;
  height: 90px;
  background-color: #d3d3d3;

  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`

const Button = styled.button`
  width: 25px;
  height: 25px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

const MainButton = styled.button`
  width: 50px;
  height: 50px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

const VolumeFull = styled(StyledVolumeFull)`

`

const VolumeMute = styled(StyledVolumeMute)`

`

const Play = styled(PlayCircle)`

`

const Pause = styled(PauseCircle)`

`

const Prev = styled(SkipPrevious)`

`

const Next = styled(SkipNext)`

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

export {
  Wrapper,
  Slider,
  Prev,
  Next,
  Play,
  Pause,
  VolumeFull,
  VolumeMute,
  Button,
  MainButton,
  Figure
}
