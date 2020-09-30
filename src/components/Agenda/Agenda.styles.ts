import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  width: 100%;
  padding: 0 1rem;

  text-align: center;
`

export const Title = styled.h1`
  @media (max-width: 1400px) {
    max-width: 80%;
    margin: 0px auto 0 !important;
  }

  @media (max-width: 1160px) {
    margin-top: 40px !important;
  }

  @media (max-width: 1024px) {
    max-width: 80%;
    margin: 32px auto 0 !important;
    font-size: 36px !important;
    line-height: 44px !important;
  }
`
