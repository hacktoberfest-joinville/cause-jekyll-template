import React from 'react'

import HacktoberfestLogo from '../HacktoberfestLogo'
import * as S from './Header.styles'

const Header = () => (
  <S.Header>
    <S.ImageGallery />
    <S.Content>
      <S.ComingSoon>Em breve</S.ComingSoon>
      <S.Logo>
        <HacktoberfestLogo />
      </S.Logo>
      <S.Title>
        O open source está mudando o mundo -{' '}
        <S.Highlight>um pull request</S.Highlight> por vez.
      </S.Title>
      <S.Description>
        Pensar numa descrição.{' '}
        <strong>#GoodFirstIssue #Hacktoberfest #MakersNetwork</strong>
      </S.Description>
    </S.Content>
    <S.ImageGallery />
  </S.Header>
)

export { Header }
