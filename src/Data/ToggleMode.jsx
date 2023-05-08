
export default function Toggle() {
  return (
    <div className="App">
      <div className="wrapper">
        <label className="switcher">
          <input type="checkbox" className="checkbox" />
          <div className="sky"></div>
          <div className="clouds">
            <div className="cloud1" />
            <div className="cloud2" />
            <div className="cloud3" />
            <div className="cloud4" />
            <div className="cloud5" />
            <div className="cloud6" />
          </div>

          <div className="toggle">
            <div className="toggle-inner">
              <div className="craters">
                <div className="crater1"></div>
                <div className="crater2"></div>
                <div className="crater3"></div>
              </div>
            </div>
          </div>

          <div className="stars">
            <div className="star-big star1" />
            <div className="star-big star2" />
            <div className="star-small star3" />
            <div className="star-small star4" />
            <div className="star-small star5" />
            <div className="star-small star6" />
          </div>
        <div></div>
          <div className="shadow" />
        </label>
      </div>
    </div>
  );
}
