import React from 'react'

import * as S from './Main.styles'

const Main = ({
  title = 'Hacktoberfest Joinville - 2020',
  description = '',
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export { Main }
