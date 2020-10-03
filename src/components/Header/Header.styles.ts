import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    max-width: 90%;
    margin: 0 auto;
  }
`

export const ImageGallery = styled.div`
  width: 365px;
  position: relative;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 770px;
`

export const ComingSoon = styled.h4`
  font-family: 'yellowtail', serif;
  color: #072540;
  font-size: 70px;
  transform: rotate(-5deg);
  margin: 0;
`

export const Logo = styled.div`
  svg {
    max-width: 670px;
  }

  @media (max-width: 1160px) {
    svg {
      max-width: 560px;
      height: 100%;
    }
  }

  @media (max-width: 1024px) {
    svg {
      margin-top: 20px;
      max-width: 90%;
      height: 100%;
    }
  }
`

export const Title = styled.h1`
  @media (max-width: 1400px) {
    max-width: 80%;
    margin: 0px auto 0 !important;
  }

  @media (max-width: 1160px) {
    margin-top: 100px !important;
  }

  @media (max-width: 1024px) {
    max-width: 80%;
    margin: 32px auto 0 !important;
    font-size: 36px !important;
    line-height: 44px !important;
  }
`

export const Highlight = styled.span`
  color: #ff8ae2;
`

export const Description = styled.p`
  max-width: 770px;
  letter-spacing: 0.5px;

  @media (max-width: 1024px) {
    max-width: 80%;
    margin: 20px auto 0;
  }
`

export const Button = styled.a`
  border-radius: 60px;
  background: #9c4668;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.1);
  padding: 20px 40px;
  transition-duration: 0.4s;
  margin: 30px 0;
  font-size: 32px;
  color: #000 !important;

  :hover {
    background: #072540;
    text-decoration: none;
  }
`
