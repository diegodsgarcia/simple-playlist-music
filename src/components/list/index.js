import React from 'react'
import * as S from './styled'

export default function List({ musics, onItemClick, selected }) {
  return (
  <S.Wrapper>
    {musics.map(((music, i) => (
      <S.Item key={i} selected={selected === music}>
        <figure onClick={onItemClick.bind(this, music)}>
          <img src={music.image} alt={music.name} />
        </figure>
        <S.Description>
          <p className="title">{music.name}</p>
          <p className="author">{music.author}</p>
        </S.Description>
        <article>
        </article>
      </S.Item> 
    )))}
  </S.Wrapper>
  )
}
