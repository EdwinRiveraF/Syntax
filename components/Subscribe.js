const Subscribe = props => (
  <div className="subscribe">
    <ul className="subscribe__links">
      <li className="subscribe__link subscribe__link--itunes">
        <a
          target="_blank"
          href="https://itunes.apple.com/us/podcast/marketing-digital-para-todos/id1435005457?mt=2&uo=4"
        >
          iTunes
        </a>
      </li>
      <li className="subscribe__link subscribe__link--overcast">
        <a
          target="_blank"
          href="https://overcast.fm/itunes1435005457/marketing-digital-para-todos"
        >
          Overcast
        </a>
      </li>
      <li className="subscribe__link subscribe__link--google">
        <a
          target="_blank"
          href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8zM2EzMmE0L3BvZGNhc3QvcnNz"
        >
          Google Podcast
        </a>
      </li>
      <li className="subscribe__link subscribe__link--stitcher">
        <a target="_blank" href="https://www.stitcher.com/podcast/anchor-podcasts/marketing-digital-para-todos">
          Stitcher
        </a>
      </li>
      <li className="subscribe__link subscribe__link--pocketcasts">
        <a target="_blank" href="https://pca.st/FaCl">
          PocketCasts
        </a>
      </li>
      {/*<li className="subscribe__link subscribe__link--googleplay">*/}
        {/*<a*/}
          {/*target="_blank"*/}
          {/*href="https://playmusic.app.goo.gl/?ibi=com.google.PlayMusic&isi=691797987&ius=googleplaymusic&link=https://play.google.com/music/m/Ityd325x5s5ivr3fc74hvvgeztu?t%3DSyntax_-_Tasty_Web_Development_Treats%26pcampaignid%3DMKT-na-all-co-pr-mu-pod-16"*/}
        {/*>*/}
          {/*Google Play*/}
        {/*</a>*/}
      {/*</li>*/}
      <li className="subscribe__link subscribe__link--spotify">
        <a
          target="_blank"
          href="https://open.spotify.com/show/7wnIAf5GkUZt4zh8KKJNBj"
        >
          Spotify
        </a>
      </li>
      <li className="subscribe__link subscribe__link--rss">
        <a target="_blank" href="https://anchor.fm/s/33a32a4/podcast/rss">
          RSS
        </a>
      </li>
    </ul>
  </div>
);

export default Subscribe;
