export default function() {
  return {
    view() {
      return (
        <div className="uk-container">
          <form className="uk-grid-small" uk-grid>
            <div className="uk-width-1-6@s">
              <input className="uk-input" type="text" placeholder="€0"/>
            </div>
            <div className="uk-width-1-6@s">
              <input className="uk-input" type="text" placeholder="€150"/>
            </div>
            <div className="uk-width-1-3@s">
              <select className="uk-select">
                <option>City Bike</option>
                <option>Mountain Bike</option>
              </select>
            </div>
            <div className="uk-width-1-3@s">
              <select className="uk-select">
                <option>Steel</option>
                <option>Aluminum</option>
                <option>Titanium</option>
              </select>
            </div>
          </form>
        </div>
      );
    },
  };
}