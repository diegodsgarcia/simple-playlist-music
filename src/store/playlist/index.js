import { PlaylistTypes } from './actions'
import playlist from '../musics'

const INITIAL_STATE = {
  musicSelected: playlist[0],
  playlist,
  playing: false,
  hasNext: true,
  hasPrev: false,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlaylistTypes.SET_MUSIC:
      return { ...state, musicSelected: action.payload.music };
    case PlaylistTypes.PLAY_MUSIC:
      return { ...state, playing: action.payload };
    case PlaylistTypes.SET_PREV:
      return { ...state, hasPrev: action.payload };
    case PlaylistTypes.SET_NEXT:
      return { ...state, hasNext: action.payload };
    default:
      return state;
  }
}

export default reducer;
