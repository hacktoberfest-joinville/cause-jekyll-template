import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 0 auto;
  }

  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 770px;
`

export const Title = styled.h2`
  @media (max-width: 1400px) {
    max-width: 80%;
    margin: 0 auto !important;
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

export const ImageGallery = styled.div`
  display: inline-block;
  justify-content: center;
  text-align: center;
  margin: auto;
`
export const ImageLink = styled.a`
  margin: 8px;
`

export const Image = styled.img`
  border-radius: 16px;
  margin: 8px;
  background: #9c4668;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
`
