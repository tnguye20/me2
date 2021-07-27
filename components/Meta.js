import Head from 'next/head';

export const Meta = ({ meta }) => {
    const { title, description, logo, favicon, logo192, domain } = meta;
    return (
        <Head>
            <title>{title}</title>
            <meta charset="utf-8" />
            <link rel="icon" href={favicon.url}/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="description"
                content={description}
            />
            <meta
                name="title"
                content={title}
            />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={domain}/>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={logo.url}/>

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={domain}/>
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={logo.url}/>

            <link rel="apple-touch-icon" href={logo192.url} />
            <link rel="manifest" href="/manifest.json" />
        </Head>
    )
}
