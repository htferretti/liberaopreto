import { useState } from "react";

import GlobalStyle from "./style";

import Slide1 from "./Slides/1";
import Slide2 from "./Slides/2";
import Slide3 from "./Slides/3";
import Slide4 from "./Slides/4";
import Slide6 from "./Slides/6";
import Slide67 from "./Slides/7-6";
import Slide7 from "./Slides/7";
import Slide8 from "./Slides/8";
import Slide9 from "./Slides/9";
import Slide10 from "./Slides/10";
import Slide11 from "./Slides/11";
import Slide12 from "./Slides/12";
import Slide13 from "./Slides/13";
import Slide14 from "./Slides/14";
import Slide15 from "./Slides/15";
import Slide16 from "./Slides/16";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [Slide1, Slide2, Slide3, Slide4, Slide6, Slide67, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16];
  const ActiveSlide = slides[currentSlide];

  const goToNextSlide = () => {
    setCurrentSlide((previousSlide) => Math.min(previousSlide + 1, slides.length - 1));
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((previousSlide) => Math.max(previousSlide - 1, 0));
  };

  return (
    <>
      <GlobalStyle />
      <ActiveSlide
        onPrevious={currentSlide > 0 ? goToPreviousSlide : undefined}
        onNext={currentSlide < slides.length - 1 ? goToNextSlide : undefined}
      />
    </>
  );
}

export default App;
