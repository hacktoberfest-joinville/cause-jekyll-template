import React from 'react'

import * as S from './Footer.styles'
import pessoas from './pessoas.json'

const Footer = () => (
  <S.Footer>
    <S.Title>Colaboradores</S.Title>
    <S.ImageGallery>
      {pessoas.map(event => (
        <S.ImageLink key={event.key} href={event.externalLink} target="_blank">
          <S.Image src={event.photo} alt={event.name} />
        </S.ImageLink>
      ))}
    </S.ImageGallery>
  </S.Footer>
)

export { Footer }
