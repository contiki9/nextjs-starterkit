import Head from 'next/head'

import { siteName, siteDomain } from '../../../../site.config'
export interface MetaProps {
  title?: string
  description?: string
}

export const Meta = ({ title, description = '' }: MetaProps) => {
  const pageTitle =
    title === undefined ? `${siteName}` : `${title} | ${siteName}`
  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://${siteDomain}/images/ogp.png`}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
