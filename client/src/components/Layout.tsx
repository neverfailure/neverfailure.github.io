import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import { BILIBILI_URL, DOUYIN_URL } from '@client/src/data/works';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import { Image } from '@client/src/components/ui/image';
import avatarUrl from '@client/src/assets/avatar.jpg';

const NAV_ITEMS = [
  { to: '/', issue: '01', label: '关于我', end: true },
  { to: '/works', issue: '02', label: '作品', end: false },
  { to: '/guestbook', issue: '03', label: '留言板', end: false },
];

const FOOTER_LINKS = [
  { label: 'B 站', href: BILIBILI_URL },
  { label: '抖音', href: DOUYIN_URL },
];

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 border-b border-foreground bg-background/95 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-[1180px] px-6 pt-4 sm:px-14">
          <div className="flex items-center justify-between gap-4 pb-2 font-[family-name:var(--font-hei)] text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-px w-5 bg-primary/60" />
              No.01 · Never_Failure 个人刊
            </span>
            <span className="tnum hidden sm:block">
              {dayjs().format('DD · MM · YYYY')}
            </span>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1180px] items-end justify-between gap-4 px-6 pb-3 sm:px-14">
          <Link to="/" className="group flex items-center gap-3">
            <span className="h-10 w-10 shrink-0 overflow-hidden border border-foreground/70 transition-colors group-hover:border-primary">
              <Image
                src={avatarUrl}
                alt="Never_Failure 头像"
                width={40}
                sizes="40px"
                className="h-full w-full object-cover"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[22px] font-bold text-foreground">
                Never_Failure
              </span>
              <span className="mt-1.5 font-[family-name:var(--font-hei)] text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                数码 · 影像 · 生活
              </span>
            </span>
          </Link>

          <nav aria-label="主导航" className="flex items-end gap-4 sm:gap-7">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    'flex flex-col items-start gap-1 border-b-2 pb-1 transition-colors',
                    isActive
                      ? 'border-foreground text-foreground'
                      : 'border-transparent text-muted-foreground hover:text-foreground',
                  ].join(' ')
                }
              >
                <span className="font-[family-name:var(--font-hei)] text-[9px] uppercase tracking-[0.2em]">
                  {item.issue}
                </span>
                <span className="font-body text-[14px] leading-none">
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-foreground">
        <div className="mx-auto w-full max-w-[1180px] px-6 pb-12 pt-10 sm:px-14">
          <div className="grid gap-8 sm:grid-cols-[auto_1fr_auto] sm:items-start">
            <div className="border border-border bg-card px-4 py-3">
              <span className="eyebrow inline-block border border-foreground px-1.5 py-0.5 text-foreground">
                Pro tip
              </span>
              <p className="mt-2 max-w-[230px] font-kai text-[14px] leading-[1.5] text-foreground/75">
                名字是提醒，不是结果。摔过的地方，后来都成了能讲出来的故事。
              </p>
            </div>

            <div aria-hidden="true" className="hidden sm:block" />

            <div className="flex flex-col gap-2 font-[family-name:var(--font-hei)] text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:items-end">
              <span>福建农林大学 · 人工智能 · 邵武 → 福州</span>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 sm:justify-end">
                {FOOTER_LINKS.map((link) => (
                  <UniversalLink
                    key={link.label}
                    to={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </UniversalLink>
                ))}
                <Link
                  to="/guestbook"
                  className="transition-colors hover:text-foreground"
                >
                  留言板
                </Link>
                <span className="tnum">© {dayjs().year()}</span>
              </div>
              <span>Set in Songti, Heiti &amp; Kaiti</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
