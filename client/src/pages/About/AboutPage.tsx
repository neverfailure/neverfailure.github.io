import AboutHero from './components/AboutHero';
import AboutFocus from './components/AboutFocus';
import AboutPortrait from './components/AboutPortrait';
import AboutStats from './components/AboutStats';
import AboutStory from './components/AboutStory';
import AboutVoice from './components/AboutVoice';

const AboutPage = () => {
  return (
    <div className="mx-auto w-full max-w-[1180px] px-6 pb-16 pt-9 sm:px-14 sm:pb-20">
      <AboutHero />

      <div
        className="mt-10 grid gap-x-14 gap-y-0 border-t border-foreground md:grid-cols-2 [&>section:last-child]:border-b-0 md:[&>section]:border-b md:[&>section]:border-border md:[&>section:nth-last-child(-n+2)]:border-b-0"
        aria-label="关于我详细内容"
      >
        <AboutStory />
        <AboutFocus />
        <AboutStats />
        <AboutVoice />
      </div>

      <AboutPortrait />
    </div>
  );
};

export default AboutPage;
