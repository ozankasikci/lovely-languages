import LandingPageListLeft from '../components/landing-page/landing-page-left-menu';
import CodeEditor from '../components/code-editor';

export default function() {
  return {
    view() {
      return (
        <section className="uk-section uk-section-small uk-section-default uk-padding-remove-bottom uk-padding-remove-top"
          data-uk-filter="target: .js-filter">
          <div className="uk-grid uk-height-viewport">
            <div className="uk-width-auto uk-height-viewport"> <LandingPageListLeft/> </div>
            <div className="uk-width-expand"> <CodeEditor/> </div>
          </div>
        </section>
      );
    },
  };
}
