import Banner from './components/Banner';
import Timer from './components/Coupon';
import DoctorsNoteSection from './components/DoctorsNoteSection';

import EasyStepsSection from './components/EasyStepsSection';
import Footer from './components/Footer';
import LogoBar from './components/LogoBar';
import { MoneyBack } from './components/MoneyBack';

export default function Home() {
  return (
    <div>
      <Timer />
      <LogoBar />
      <Banner />
      <EasyStepsSection />
      <MoneyBack />
      <DoctorsNoteSection />
      <Footer />
    </div>
  );
}
