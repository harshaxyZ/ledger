import React from 'react';
import PresentationEngine from './PresentationEngine';
import * as Slides from './slides';

const slidesList = [
  Slides.Slide01,
  Slides.Slide02,
  Slides.Slide03,
  Slides.Slide04,
  Slides.Slide05,
  Slides.Slide06,
  Slides.Slide07,
  Slides.Slide08,
  Slides.Slide09,
  Slides.Slide10,
  Slides.Slide11,
  Slides.Slide12,
  Slides.Slide13,
  Slides.Slide14,
  Slides.Slide15,
  Slides.Slide16,
  Slides.Slide17,
  Slides.Slide18,
  Slides.Slide19,
  Slides.Slide20,
  Slides.Slide21,
];

const Presentation = () => {
  return <PresentationEngine slides={slidesList} />;
};

export default Presentation;
