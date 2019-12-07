import { action } from 'typesafe-actions'

export const PlaylistTypes = {
  SET_MUSIC: '@playlist/SET_MUSIC',
  PLAY_MUSIC: '@playlist/PLAY_MUSIC',
  SET_PREV: '@playlist/SET_PREV',
  SET_NEXT: '@playlist/SET_NEXT',
}

export const setMusic = (music) => action(PlaylistTypes.SET_MUSIC, { music })
export const playMusic = (play) => action(PlaylistTypes.PLAY_MUSIC, play)
export const setPrev = (hasPrev) => action(PlaylistTypes.SET_PREV, hasPrev)
export const setNext = (hasNext) => action(PlaylistTypes.SET_NEXT, hasNext)
