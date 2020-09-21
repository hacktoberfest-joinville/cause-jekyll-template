import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = () => (
  <>
    <Helmet>
      <html lang="pt-BR" />
      <meta charSet="utf-8" />
      <link rel="canonical" href="https://hacktoberfest.joinville.br/" />

      {/* Primary Meta Tags */}
      <title>Hacktoberfest 2020 | Joinville</title>
      <meta name="title" content="Hacktoberfest 2020 | Joinville" />
      <meta
        name="description"
        content="O open source está mudando o mundo – um pull request por vez."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Hacktoberfest 2020 | Joinville" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Hacktoberfest Joinville | 2020" />
      <meta
        property="og:description"
        content="O open source está mudando o mundo – um pull request por vez."
      />
      <meta property="og:url" content="https://hacktoberfest.joinville.br/" />
      <meta property="og:image" content="/assets/og-hf-teaser.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@fablabjoinville" />
      <meta name="twitter:site" content="@fablabjoinville" />
      <meta name="twitter:title" content="Hacktoberfest 2020 | Joinville" />
      <meta
        name="twitter:description"
        content="O open source está mudando o mundo – um pull request por vez."
      />
      <meta name="twitter:image" content="/assets/og-hf-teaser.png" />
      <meta name="twitter:url" content="https://hacktoberfest.joinville.br/" />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;900&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  </>
)

export { SEO }
