import cover1 from '@client/src/assets/works/01_install.jpg';
import cover2 from '@client/src/assets/works/02_moon.jpg';
import cover3 from '@client/src/assets/works/03_wuhan.jpg';
import cover4 from '@client/src/assets/works/04_three_gorges.jpg';
import cover5 from '@client/src/assets/works/05_yangtze.jpg';
import cover6 from '@client/src/assets/works/06_shilin.jpg';
import cover7 from '@client/src/assets/works/07_snow.jpg';
import cover8 from '@client/src/assets/works/08_router.jpg';
import cover9 from '@client/src/assets/works/09_vlog.jpg';
import cover10 from '@client/src/assets/works/10_life.jpg';

export interface WorkItem {
  id: string;
  title: string;
  views: number;
  duration: string;
  url: string;
  tag: string;
  cover: string;
}

export const BILIBILI_URL = 'https://space.bilibili.com/1090404099';
export const DOUYIN_URL =
  'https://www.douyin.com/user/MS4wLjABAAAAf2Uhf2MEx8JpxGCxu6pWcs175ZHcvU73elMwvUkom68';
export const BILIBILI_SIGNATURE =
  '做内容像在江边捞东西：有时候捞上来的是漂亮石头，有时候只是一截树枝，但每一次把手伸出去，都是真的。';

export const PROFILE_STATS = {
  works: 50,
  followers: 603,
  following: 997,
};

export const CATEGORY_DISTRIBUTION = [
  { name: '科技', count: 21 },
  { name: '生活', count: 18 },
  { name: '知识', count: 6 },
  { name: '美食', count: 3 },
  { name: '动物圈', count: 2 },
];

export const WORKS: WorkItem[] = [
  {
    id: 'BV1Cx4y1U7md',
    title: '我终于换电脑了 i5-10400F+GTX 960 新机子组装',
    views: 13253,
    duration: '03:02',
    url: 'https://www.bilibili.com/video/BV1Cx4y1U7md',
    tag: '装机实录',
    cover: cover1,
  },
  {
    id: 'BV1DVtseEE12',
    title: '月亮好圆_红米k60原相机直出',
    views: 494,
    duration: '00:43',
    url: 'https://www.bilibili.com/video/BV1DVtseEE12',
    tag: '手机影像',
    cover: cover2,
  },
  {
    id: 'BV1uavveaEf1',
    title: '这里是武汉。繁华与忙碌',
    views: 112,
    duration: '02:38',
    url: 'https://www.bilibili.com/video/BV1uavveaEf1',
    tag: '城市记录',
    cover: cover3,
  },
  {
    id: 'BV1iyv4enEmf',
    title: '船坐“电梯” 三峡大坝船闸→升船机',
    views: 256,
    duration: '02:41',
    url: 'https://www.bilibili.com/video/BV1iyv4enEmf',
    tag: '水利奇观',
    cover: cover4,
  },
  {
    id: 'BV1Zkv4eQErG',
    title: '长江沿途风景',
    views: 87,
    duration: '06:13',
    url: 'https://www.bilibili.com/video/BV1Zkv4eQErG',
    tag: '旅途影像',
    cover: cover5,
  },
  {
    id: 'BV1m1vzeMEQQ',
    title: '梭布垭石林 极简',
    views: 53,
    duration: '01:22',
    url: 'https://www.bilibili.com/video/BV1m1vzeMEQQ',
    tag: '旅行记录',
    cover: cover6,
  },
  {
    id: 'BV1nC4y1k7ik',
    title: '福建小土豆的 2024的第一场雪',
    views: 113,
    duration: '01:43',
    url: 'https://www.bilibili.com/video/BV1nC4y1k7ik',
    tag: '家乡邵武',
    cover: cover7,
  },
  {
    id: 'BV1sW4y1F7qo',
    title: 'TP-LINK AX3000 满血WiFi6 开箱',
    views: 513,
    duration: '01:42',
    url: 'https://www.bilibili.com/video/BV1sW4y1F7qo',
    tag: '网络设备',
    cover: cover8,
  },
  {
    id: 'BV1Ru6DYgE9z',
    title: '2024年度VLog',
    views: 18,
    duration: '02:21',
    url: 'https://www.bilibili.com/video/BV1Ru6DYgE9z',
    tag: '年度影像',
    cover: cover9,
  },
  {
    id: 'BV13sug6uEXh',
    title: '为了这一张纸，熬过了12个春夏秋冬',
    views: 78,
    duration: '00:12',
    url: 'https://www.bilibili.com/video/BV13sug6uEXh',
    tag: '生活碎片',
    cover: cover10,
  },
];
