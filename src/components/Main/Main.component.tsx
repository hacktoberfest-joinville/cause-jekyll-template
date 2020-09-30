import React from 'react'

import * as S from './Main.styles'

const Main = ({ title = 'Hacktoberfest Joinville - 2020' }) => (
  <S.Wrapper>
    <h1>{title}</h1>
  </S.Wrapper>
)

export { Main }
