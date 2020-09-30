import React from 'react'

import agenda from './agenda.json'
import * as S from './Agenda.styles'

const Agenda = () => (
  <S.Wrapper>
    <S.Title>Agenda</S.Title>

    {agenda.map(event => (
      <span key={event.title}>{event.title}</span>
    ))}
  </S.Wrapper>
)

export { Agenda }
