import type { FC } from 'react';
import SectionCell from '@client/src/components/magazine/SectionCell';

const PARAGRAPHS = [
  '我来自福建南平邵武，一个群山环绕的闽北小城。小时候蹲在爸爸电脑桌前摸键盘，第一次知道按下开关屏幕会亮，那种感觉一直留到现在。后来到福州读书，选了人工智能专业，方向选得很「顺」，但折腾硬件才是我最停不下来的事。',
  '为什么叫 Never_Failure？不是想证明自己从没失败过——恰恰相反，装机点不亮、刷机变砖、拍月亮糊成一团、剪片卡成 PPT，这些事我都经历过。取这个名字，是想提醒自己：摔过再站起来的人，才有资格笑着把过程讲给别人听。',
  '平时我喜欢拿着手机拍城市和江河。夜里爬起来拍超级月亮，坐轮渡追长江上的雾，到武汉第一件事是去江滩看灯。对我来说，影像不是参数，是把「那个瞬间的我」留在画面里。',
];

const QUOTE_TEXT =
  '做内容像在江边捞东西：有时候捞上来的是漂亮石头，有时候只是一截树枝，但每一次把手伸出去，都是真的。';

const AboutStory: FC = () => {
  return (
    <SectionCell index="01" title="关于我">
      <div className="space-y-3">
        {PARAGRAPHS.map((p: string) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <blockquote className="quote-bar mt-5">
        {QUOTE_TEXT}
      </blockquote>
    </SectionCell>
  );
};

export default AboutStory;
