import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <title>Grimace On Solana - $GRIM</title>
      <meta
            name="keywords"
            content="Grimace On Solana - $GRIM"
          />
          <meta
            name="description"
            content="Get ready for a whimsical, thrilling journey into the world of Solana gaming with a twist of nostalgia! Grimace, the lovable and enigmatic friend of Ronald McDonald, takes center stage in an electrifying gaming project that promises to redefine fun."
          />
          <meta name="author" content="Zasha" />
          <link rel="shortcut icon" href="/favicon.ico" />
      <Head />
      <body style={{'height':'100vh'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
