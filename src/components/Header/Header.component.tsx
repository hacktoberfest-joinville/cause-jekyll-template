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
        <br /><br />
        <S.Title>
          O open source está mudando o mundo -{' '}
          <S.Highlight>um pull request</S.Highlight> por vez.
        </S.Title>
        <S.Description>
          <strong>#GoodFirstIssue #Hacktoberfest #MakersNetwork</strong>
        </S.Description>
      </S.Content>
    <S.ImageGallery />
  </S.Header>
)

export { Header }
