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
                      <span>Mithril Starter Kit</span>
                    </a>
                  </li>
                </ul>
            </div>
            <div className="uk-width-auto">
              <ul className="uk-subnav" data-uk-margin>
                <li id="sell-your-bike" className="uk-visible@s link-vertical-align custom-menu-item"><a href="#">Sell Your Bike!</a></li>
                <li className="uk-visible@s link-vertical-align custom-menu-item"><a href="#">About Us</a></li>
                <li className="uk-visible@s link-vertical-align custom-menu-item"><a href="#">Account</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      );
    },
  };
}
