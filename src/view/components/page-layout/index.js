import Header from '../header';
import Footer from '../footer';
import './styles.scss';

/**
 * A component that wraps another component with some common
 * page layout markup and styles.
 */
export default function() {
  return {
    view: (vnode) => m('#page-layout', [
      // m(Header),
      // m('div.spacer'),
      vnode.children,
      m(Footer),
    ]),
  };
}