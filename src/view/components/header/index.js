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
                    <span>LOVELY LANGUAGES (A tool to compare languages at a glance)</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="uk-width-auto">
              <ul className="uk-subnav" data-uk-margin>
                <li className="uk-visible@s link-vertical-align custom-menu-item"><a href="#!/about">About</a></li>
                <li style="padding-top: 17px"><a class="github-button" href="https://github.com/ozankasikci/lovely-languages" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      );
    },
  };
}
