import './styles.scss';

export default function () {
  return {
    view: () => {
      return (<header id="site-head">
        <div className="uk-container uk-container-expand uk-dark">
          <div className="uk-grid uk-grid-medium uk-flex uk-flex-middle" data-uk-grid>
            <div className="uk-width-expand">
              <ul className="uk-navbar-nav">
                <li className="logo">
                  <a href="#" title="">
                    <span>Lovely Languages</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="uk-width-auto">
              <ul className="uk-subnav" data-uk-margin>
                {/*<li className="uk-visible@s link-vertical-align custom-menu-item"><a href="#">Home</a></li>*/}
                {/*<li className="uk-visible@s link-vertical-align custom-menu-item"><a href="#">About</a></li>*/}
                {/*<li className="uk-visible@s link-vertical-align custom-menu-item"><a href="#">Documentation</a></li>*/}
              </ul>
            </div>
          </div>
        </div>
      </header>
      );
    },
  };
}
