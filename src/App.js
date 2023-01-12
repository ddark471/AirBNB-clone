function WrapCard(){
    return (<div className="wrap__card" id="wrap__card">
    <img src="./image-12.svg" alt="" className="card__image"/>
    <div className="card__description">
      <div className="description__rating">
      <svg className="rating__star" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.52447 0.463525C5.67415 0.0028693 6.32585 0.00287002 6.47553 0.463525L7.45934 3.49139C7.52628 3.6974 7.71826 3.83688 7.93487 3.83688H11.1186C11.6029 3.83688 11.8043 4.45669 11.4124 4.74139L8.83679 6.61271C8.66155 6.74003 8.58822 6.96572 8.65516 7.17173L9.63897 10.1996C9.78864 10.6602 9.2614 11.0433 8.86955 10.7586L6.29389 8.88729C6.11865 8.75997 5.88135 8.75997 5.70611 8.88729L3.13045 10.7586C2.73859 11.0433 2.21136 10.6602 2.36103 10.1996L3.34484 7.17173C3.41178 6.96572 3.33845 6.74003 3.16321 6.61271L0.587553 4.74139C0.195696 4.45669 0.397084 3.83688 0.881446 3.83688H4.06513C4.28174 3.83688 4.47372 3.6974 4.54066 3.49139L5.52447 0.463525Z" fill="#FE395C"/>
      </svg>
      <span className="rating__number"> 5.0<span className="number__text">(6) • USA</span></span>
      </div>
      <div className="description__comment">Life lessons with Katie Zaferes</div>
      <b className="description__price">From $136 <span className="price__amount">/ person</span></b>
    </div>
  </div>)
};

function App() {
  return (
    <div className="wrap">
        <nav className="wrap__topbar">
          <div className="topbar__rectangle">
            <img src="./airbnb-logo.svg" alt="airbnb logo" className="rectangle__logo"/>
          </div>
          <div className="topbar__main">
            <img src="./image 28.svg" alt="" className="main__image1" />
            
            <div className="main__image2">
              <img src="./image 30.svg" alt="image2" className="image2__1"/>
              <img src="./image 26.svg" alt="iamge3" className="image2__2"/>
            </div>

            <div className="main__image3">
              <img src="./image 27.svg" alt="image4" className="image3__1"/>
              <img src="./image 29.svg" alt="iamge5" className="image3__2"/>
            </div>

            <div className="main__image4">
              <img src="./image 22.svg" alt="image6" className="image4__1"/>
              <img src="./image 23.svg" alt="image7" className="image4__2"/>
            </div>
            
            <div className="main__image5">
              <img src="./image 25.svg" alt="image8" className="image5__1"/>
              <img src="./image 24.svg" alt="iamge9" className="image5__2"/>
            </div>
          </div>
        </nav>

        <div className="wrap__text">
          <span className="text__heading">Online Experiences</span>
          <span className="text__main">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</span>
        </div>

      <div className="wrap__main">
           <WrapCard />
           <WrapCard />
           <WrapCard />
      </div>
    </div>
  )
};

export default App;
