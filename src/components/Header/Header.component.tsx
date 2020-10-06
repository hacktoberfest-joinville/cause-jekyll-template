import React from 'react'

import HacktoberfestLogo from '../HacktoberfestLogo'
import * as S from './Header.styles'

const Header = () => (
  <S.Header>
    <S.ImageGallery />
    <S.Content>
      <S.Logo>
        <HacktoberfestLogo />
      </S.Logo>
      <S.ComingSoon>Joinville</S.ComingSoon>
      <br />
      <br />
      <S.Title>
        O open source está mudando o mundo - um pull request por vez.
      </S.Title>
      <S.Content>
        <S.Button>
          <a href="https://organize.mlh.io/participants/events/4286-hacktoberfest-joinville">
            REGISTRE-SE AQUI!
          </a>
        </S.Button>
      </S.Content>
      <S.ImageGallery />
      <h2>
        Neste ano, nosso principal canal de comunicação será o
        <a href="https://discord.gg/" target="_blank">
          {' '}
          Discord{' '}
        </a>
        da
        <a href="https://discord.gg/fBjKFca" target="_blank">
          {' '}
          Makers Network{' '}
        </a>
        .
      </h2>
      <S.ImageLink href="https://discord.gg/fBjKFca" target="_blank">
        <S.Image src="/assets/qrcode.png" alt="Discord MakersNetwork" />
      </S.ImageLink>
      <S.ImageGallery />
    </S.Content>
    <S.ImageGallery />
  </S.Header>
)

export { Header }
