import React from 'react'

import agenda from './agenda.json'
import * as S from './Agenda.styles'

const Agenda = () => (
  <S.Wrapper>
    <S.Title>Agenda</S.Title>

    {agenda.map(event => (
      <S.List key={event.title}>
        <h3 key={event.title}>
          <a href={event.externalLink}>{event.title}</a>
        </h3>
        <p><strong>{event.date}: {event.startTime} - {event.endTime}</strong></p>
        <p key={event.shortDescription}>
          {event.shortDescription}
        </p>
      </S.List>
    ))}
  </S.Wrapper>
)

export { Agenda }
