import './styles.scss';

export default function () {
  return {
    view() {
      return (<div className="about-container">
        <h1 className="about-title">About</h1>
        <p><b>Lovely Languages</b> is a website that lists the same code snippet in different programming languages.</p>
        <p>Our vision is to help people with understanding the relationship between various programming languages.
          They all have their strong and weak sides. This project aims to reveal all these different pros and cons.
          And most importantly to admire the beauty of all the programming languages.
        </p>
        <p>Feel free to contribute to the project, add new algorithms and new programming languages, spread the knowledge!</p>
      </div>);
    },
  };
}
