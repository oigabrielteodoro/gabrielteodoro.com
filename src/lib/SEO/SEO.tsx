import Head from "next/head";

export function SEO() {
  const pageTitle = "Gabriel Teodoro | Product Developer";
  const pageImage = "https://github.com/oigabrielteodoro.png";

  return (
    <Head>
      <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
      <meta name="MobileOptimized" content="320" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="theme-color" content="#121214" />
      <meta name="msapplication-TileColor" content="#121214" />
      <meta name="referrer" content="no-referrer-when-downgrade" />
      <meta name="google" content="notranslate" />

      <title>{pageTitle}</title>

      <meta property="og:title" content={pageTitle} />
      <meta
        name="description"
        content="Página de apresentação sobre Gabriel Teodoro, mostrando suas habilidades utilizando tecnologias Front-End e Back-End"
      />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={pageTitle} />
      {pageImage && (
        <>
          <meta property="og:image" content={pageImage} />
          <meta property="og:image:secure_url" content={pageImage} />
        </>
      )}
      <meta property="og:image:alt" content="Thumbnail" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@brainn_co" />
      <meta name="twitter:creator" content="@brainn_co" />
      {pageImage && (
        <>
          <meta name="twitter:image" content={pageImage} />
          <meta name="twitter:image:src" content={pageImage} />
        </>
      )}
      <meta name="twitter:image:alt" content="Thumbnail" />
      <meta name="twitter:image:width" content="1200" />
      <meta name="twitter:image:height" content="620" />
    </Head>
  );
}
