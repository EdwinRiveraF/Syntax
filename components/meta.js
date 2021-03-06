import Head from 'next/head';
import stylesheet from '../styles/style.styl';
import slug from 'speakingurl';

export default ({ show, baseURL }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta property="og:audio" content={show.url} />
      <meta property="og:audio:secure_url" content={show.url} />
      <meta property="og:audio:type" content="audio/mp3" />
      <meta property="og:type" content="music.song" />
      <meta property="og:title" content={`${show.title} — Marketing Digital el Podcast ${show.displayNumber}`} />
      <meta
        property="og:description"
        content="My Podcast Dedscription Here"
      />
      <meta property="og:url" content={`${baseURL}/show/${show.displayNumber}/${slug(show.title)}`} />
      {/* <meta property="og:image" content={`${baseURL}/static/syntax-banner.png`} /> */}
      <link rel="shortcut icon" href={`${baseURL}/static/favicon.png`} />
      <title>
        {show.title} — MDPT Podcast {show.displayNumber}
      </title>
      <style dangerouslySetInnerHTML={{ __html: stylesheet.replace(/\n/g, '') }} />
    </Head>
  </div>
);
