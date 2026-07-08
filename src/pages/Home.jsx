import Hero from '../components/home/Hero';
import WhyUs from '../components/home/WhyUs';
import CoursesPreview from '../components/home/CoursesPreview';
import Testimonials from '../components/home/Testimonials';
import DownloadApp from '../components/home/DownloadApp';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <CoursesPreview />
      <Testimonials />
      <DownloadApp />
      <CTASection />
    </>
  );
}
