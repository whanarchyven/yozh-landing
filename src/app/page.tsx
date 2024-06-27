import MainBlock from '@/widgets/main-block';
import BlockWrapper from '@/features/block-wrapper';
import AboutBlock from '@/widgets/about-block';
import HowToWorkBlock from '@/widgets/how-to-work-block';
import Partners from '@/widgets/partners';
import TourRoutes from '@/widgets/tour-routes';
import Team from '@/widgets/team';
import OurPartners from '@/widgets/our-partners';
import Footer from '@/widgets/footer';

export default function Home() {
  return (
    <>
      <main className={''}>
        <MainBlock />
        <BlockWrapper color={'yellow'} />
        <AboutBlock />
        <HowToWorkBlock />
        <Partners />
        <TourRoutes />
        <Team />
        <BlockWrapper color={'yellow'} />
        <OurPartners />
        <Footer />
      </main>
    </>
  );
}
