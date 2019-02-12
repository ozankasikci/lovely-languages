import PageLayout from './components/page-layout';

// Individual pages
import IndexPage from './pages/landing-page';
import AboutPage from './pages/about';

const Routes = {
  '/index': {
    render() {
      return m(PageLayout, m(IndexPage));
    },
  },
  '/about': {
    render() {
      return m(PageLayout, m(AboutPage));
    },
  },
};

const DefaultRoute = '/index';

export { Routes, DefaultRoute };