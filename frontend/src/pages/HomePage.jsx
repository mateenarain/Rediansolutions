import { Hero } from '../section/Hero';
import { Portfolio } from '../section/Portfolio';
import { Review } from '../section/Review';
import { Client } from '../section/Client';
import { Cta } from '../section/Cta';
import { Offer } from '../section/Offer';

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <Portfolio />
      <Review />
      <Client />
      <Cta />
    </>
  );
}
