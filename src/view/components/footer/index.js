import './styles.scss';

export default function () {
  return {
    view: () => {
      return (
        <footer id="site-foot" className="uk-section uk-section-secondary uk-section-xsmall">
          <div className="uk-container uk-text-small uk-text-center">
            <a href="https://github.com/zzseba78/Kick-Off">Created by KickOff</a> | Built with <a
              href="http://getuikit.com" title="Visit UIkit 3 site" rel="noopener noreferrer" target="_blank" data-uk-tooltip><span
                data-uk-icon="uikit"></span></a>
          </div>
        </footer>
      );
    },
  };
}