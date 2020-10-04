import React from 'react'

import * as S from './Footer.styles'
import pessoas from './pessoas.json'

const Footer = () => (
  <S.Footer>
    <S.Title>Colaboradores</S.Title>
    <S.ImageGallery>
      {pessoas.map(event => (
        <S.ImageLink key={event.key} href={event.externalLink} target="_blank">
          <S.ProfilePicture src={event.photo} alt={event.name} />
        </S.ImageLink>
      ))}
      <S.Title>Organização</S.Title>
      <S.ImageLink href="https://discord.gg/fBjKFca" target="_blank">
        <S.Image src="/assets/makers.jpeg" alt="Makers Network" />
      </S.ImageLink>
      <S.ImageLink href="http://www.fablabjoinville.com.br/" target="_blank">
        <S.Image src="/assets/fablab.jpg" alt="FabLab Joinville" />
      </S.ImageLink>
    </S.ImageGallery>
  </S.Footer>
)

export { Footer }
