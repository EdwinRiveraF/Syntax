import Subscribe from './Subscribe';

const Header = () => (
  <header className="header">
    <div className="header__left">
      <img className="header__logo" src="/static/logo.png" alt="Mercadeo Digital Para Todos" />
    </div>
    <div className="header__right">
      <div className="title">
        <h2 className="tagline">My tagline should go here.</h2>
        <a
          target="_blank"
          // href="https://docs.google.com/forms/d/e/1FAIpQLSfQlAo1wXHiJMySdU-h8QMtfoz92aMS9eycEHXB6eRCLh8KHA/viewform"
          href="#"
          className="title__potluck-btn"
        >
          Ask a Potluck Question →
        </a>
      </div>
      <div className="people">
        <div className="person">
          <img
            src="/static/wes400x400.jpg"
            alt=""
            className="avatar"
          />
          <h3>Edwin Rivera</h3>
          <a
            target="_blank"
            href="https://twitter.com/EdwinRiveraF"
            className="person__social person__social--twitter"
          >
            @EdwinRiveraF
          </a>
          <p>
            Web Developer & Graphic Designer. Creador de{' '}
            <a target="_blank" href="https://www.anchor.com/mercadeo">
              Mercadeo Digital Para Todos
            </a>. Entusiasta del Desarrollo Web.
          </p>
        </div>

        {/* <div className="person">
          <img
            src="https://avatars2.githubusercontent.com/u/669383?s=460&v=4"
            alt=""
            className="avatar"
          />
          <h3>Scott Tolinski</h3>
          <a
            target="_blank"
            href="https://twitter.com/stolinski"
            className="person__social person__social--twitter"
          >
            @stolinski
          </a>
          <p>
            Web Developer, Creator of <a href="https://leveluptutorials.com/">Level Up Tuts</a>,
            Bboy, Robotops Crew and{' '}
            <a target="_blank" href="https://www.youtube.com/c/leveluptuts">
              Youtuber
            </a>
          </p>
        </div> */}
      </div>
    </div>
    <Subscribe />
  </header>
);

export default Header;
