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
        Hacktoberfest encourages participation in the open source community,
        which grows bigger every year. Complete the 2020 challenge and earn a
        limited edition T-shirt.{' '}
        <strong>Be the first to know when Hacktoberfest 2020 launches.</strong>
      </S.Description>
    </S.Content>
    <S.ImageGallery />
  </S.Header>
)

export { Header }
