import WorksAbout from './components/WorksAbout';
import DouyinGrid from './components/DouyinGrid';
import WorksGrid from './components/WorksGrid';
import WorksHero from './components/WorksHero';
import WorksPlatforms from './components/WorksPlatforms';
import WorksStats from './components/WorksStats';

const WorksPage = () => {
  return (
    <div className="pb-20">
      <div className="mx-auto w-full max-w-[1180px] px-6 pt-9 sm:px-14">
        <WorksHero />
      </div>

      <div className="mt-10 border-t border-foreground">
        <WorksPlatforms />
      </div>

      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-14">
        <div
          className="grid gap-x-14 gap-y-0 border-t border-foreground md:grid-cols-2 [&>section]:border-b [&>section]:border-border md:[&>section:nth-last-child(-n+2)]:border-b-0"
          aria-label="作品数据与创作态度"
        >
          <WorksStats />
          <WorksAbout />
        </div>

        <DouyinGrid />
        <WorksGrid />
      </div>
    </div>
  );
};

export default WorksPage;
