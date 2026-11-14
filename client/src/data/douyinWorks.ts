import cover0 from '@client/src/assets/works/douyin/d0_autumn.jpg';
import cover1 from '@client/src/assets/works/douyin/d1_fuzhou.jpg';
import cover2 from '@client/src/assets/works/douyin/d2_animals.jpg';
import cover3 from '@client/src/assets/works/douyin/d3_moon.jpg';
import cover4 from '@client/src/assets/works/douyin/d4_fafu.jpg';
import cover5 from '@client/src/assets/works/douyin/d5_heating.jpg';
import cover6 from '@client/src/assets/works/douyin/d6_sea_moon.jpg';
import cover7 from '@client/src/assets/works/douyin/d7_midautumn.jpg';

export interface DouyinWorkItem {
  id: string;
  title: string;
  caption: string;
  tags: string[];
  likes: number;
  comments?: number;
  collects?: number;
  duration?: string;
  publishedAt: string;
  url: string;
  cover: string;
}

export const DOUYIN_STATS = {
  works: 17,
  followers: 79,
  likes: 319,
};

export const DOUYIN_WORKS: DouyinWorkItem[] = [
  {
    id: '7706423555143917163',
    title: '冬天来了，福州可以开始赏秋了',
    caption: '',
    tags: ['#福州'],
    likes: 13,
    comments: 1,
    collects: 2,
    duration: '00:20',
    publishedAt: '2026-11-10',
    url: 'https://www.douyin.com/video/7706423555143917163',
    cover: cover0,
  },
  {
    id: '7703375554389820521',
    title: '快立冬依然30度的福州',
    caption: '福州都没几棵不是绿的树，有那就是异木棉',
    tags: ['#粉粉的异木棉', '#异木棉正当时'],
    likes: 18,
    publishedAt: '2026-11-02',
    url: 'https://www.douyin.com/note/7703375554389820521',
    cover: cover1,
  },
  {
    id: '7703374643819244522',
    title: '福农的小动物们',
    caption:
      '可惜福农的福，是八闽福泽，农亦为沃土耕耘，闽山沐风，伴福农少年躬耕逐光',
    tags: [],
    likes: 20,
    publishedAt: '2026-11-02',
    url: 'https://www.douyin.com/note/7703374643819244522',
    cover: cover2,
  },
  {
    id: '7700929035014954687',
    title: '15的月亮17圆',
    caption: '#校园赏月 #今日月色 #超级月亮',
    tags: ['#校园赏月', '#今日月色', '#超级月亮'],
    likes: 27,
    publishedAt: '2026-10-26',
    url: 'https://www.douyin.com/note/7700929035014954687',
    cover: cover3,
  },
  {
    id: '7698760839311179178',
    title: 'FAFU90周年',
    caption: '#校庆打卡 #fafu #福建农林大学',
    tags: ['#校庆打卡', '#fafu', '#福建农林大学'],
    likes: 15,
    publishedAt: '2026-10-20',
    url: 'https://www.douyin.com/video/7698760839311179178',
    cover: cover4,
  },
  {
    id: '7697581145085319396',
    title: '这居然是室内室外一起供暖',
    caption:
      '北方只有室内能供暖，我们这里倒好，全环境直接覆盖供暖 #你的城市今天多少度 #今天天气多少温度',
    tags: ['#你的城市今天多少度', '#今天天气多少温度'],
    likes: 2,
    publishedAt: '2026-10-17',
    url: 'https://www.douyin.com/note/7697581145085319396',
    cover: cover5,
  },
  {
    id: '7690239590389875027',
    title: '坐了2小时地铁，就为了这一幕',
    caption:
      '来回车程近5小时，奔赴一场海上生明月。亲眼所见，才懂这份震撼。#圆月之夜 #月亮 #塔尖上的月亮 #海上生明月',
    tags: ['#圆月之夜', '#月亮', '#塔尖上的月亮', '#海上生明月'],
    likes: 27,
    publishedAt: '2026-09-27',
    url: 'https://www.douyin.com/note/7690239590389875027',
    cover: cover6,
  },
  {
    id: '7689493047167505899',
    title: '长这么大，第一次中秋节不回家',
    caption: '#月亮 #满月 随手拍了几张，中秋快乐',
    tags: ['#月亮', '#满月'],
    likes: 12,
    publishedAt: '2026-09-25',
    url: 'https://www.douyin.com/note/7689493047167505899',
    cover: cover7,
  },
];
