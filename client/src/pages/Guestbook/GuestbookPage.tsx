import type { ReactNode } from 'react';
import EditorialHead from '@client/src/components/magazine/EditorialHead';
import GiscusComments from './components/GiscusComments';

const GuestbookPage = () => {
  const headline: ReactNode = (
    <>
      留一句<span className="strike">客套话</span>
      <span className="accent-word">真心话</span>
    </>
  );

  const deck: ReactNode = (
    <>
      聊设备、聊片子、指路哪段素材拍得还行，或者只是路过打个招呼都行。
      留言由 <b>GitHub Discussions</b> 承载，用 GitHub 账号登录后即可发言。
    </>
  );

  return (
    <div className="mx-auto w-full max-w-[860px] px-6 pb-20 pt-9 sm:px-14">
      <section aria-labelledby="guestbook-title">
        <EditorialHead
          issue="GUESTBOOK · NO. 03"
          headline={headline}
          deck={deck}
          meta={['用 GitHub 账号留言', '数据存放在仓库 Discussions', '无需注册本站']}
        />
      </section>

      <div className="mt-8">
        <GiscusComments />
      </div>
    </div>
  );
};

export default GuestbookPage;
