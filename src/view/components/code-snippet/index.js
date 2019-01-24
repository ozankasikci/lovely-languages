import './styles.scss';

export default function () {
  return {
    view: (vnode) => {
      return (
        <div className="uk-card">
          <div className="uk-card-header">
            <div className="uk-card-badge uk-label">{vnode.attrs.languageName}</div>
          </div>
          <div className="uk-card-body" key={vnode.attrs.i} id={vnode.attrs.selector}>editor</div>
        </div>
      );
    },
  };
}
