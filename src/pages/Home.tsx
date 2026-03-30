import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import Invitation from '../components/Invitation';
import Schedule from '../components/Schedule';
import DetailsRSVP from '../components/DetailsRSVP';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <Invitation />
      <Schedule />
      <DetailsRSVP />
      <Gallery />
    </>
  );
}
