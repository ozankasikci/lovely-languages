export default class Card {
  view(vnode) {
    return (
      <div className="nature-card">
        <div className="uk-card uk-card-small uk-card-default">
          <div className="uk-card-header">
            <div className="uk-grid uk-grid-small uk-text-small" data-uk-grid>
              <div className="uk-width-expand">
                <span className="cat-txt">{vnode.attrs.bike.displayName}</span>
              </div>
              <div className="uk-width-auto uk-text-right uk-text-muted">
                <span data-uk-icon="icon:clock; ratio: 0.8"></span> 3 min.
              </div>
            </div>
          </div>
          <div className="uk-card-media">
            <div className="uk-inline-clip uk-transition-toggle" tabIndex="0">
              <img className="lazy" data-src={vnode.attrs.bike.mediaId} data-width="400"
                data-height="300" data-uk-img alt="" src="img/transp.gif"/>
              <div className="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-primary">
                <span data-uk-icon="icon:heart; ratio: 0.8"></span> 12.345 <span
                  data-uk-icon="icon:comment; ratio: 0.8"></span> 12.345
              </div>
            </div>

          </div>
          <div className="uk-card-body">
            <h6 className="uk-margin-small-bottom uk-margin-remove-adjacent uk-text-bold">LOREM IPSUM SIT</h6>
            <p className="uk-text-small uk-text-muted">Duis aute irure dolor in reprehenderit in voluptate
                    velit</p>
          </div>
          <div className="uk-card-footer">
            <div className="uk-grid uk-grid-small uk-grid-divider uk-flex uk-flex-middle" data-uk-grid>
              <div className="uk-width-expand uk-text-small">
                      John Doe
              </div>
              <div className="uk-width-auto uk-text-right">
                <a href="#" data-uk-tooltip="title: Twitter" className="uk-icon-link"
                  data-uk-icon="icon:twitter; ratio: 0.8"></a>
                <a href="#" data-uk-tooltip="title: Instagram" className="uk-icon-link"
                  data-uk-icon="icon:instagram; ratio: 0.8"></a>
                <a href="#" data-uk-tooltip="title: Behance" className="uk-icon-link"
                  data-uk-icon="icon:behance; ratio: 0.8"></a>
                <a href="#" data-uk-tooltip="title: Pinterest" className="uk-icon-link"
                  data-uk-icon="icon:pinterest; ratio: 0.8"></a>
              </div>
              <div className="uk-width-auto uk-text-right">
                <a data-uk-tooltip="title: Drag this card" href="#" className="uk-icon-link drag-icon"
                  data-uk-icon="icon:move; ratio: 1"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
