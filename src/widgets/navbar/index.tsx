import { FC } from 'react';
import Logo from '@@/public/images/logo.svg';
import Telegram from '@@/public/images/social_medias/telegram.svg';
import VK from '@@/public/images/social_medias/vk.svg';

import Link from 'next/link';
const Navbar: FC = () => {
  const links = [
    {
      name: 'О проекте',
      link: '#about',
    },
    {
      name: 'Как это работает?',
      link: '#howtowork',
    },
    {
      name: 'Команда',
      link: '#team',
    },
    {
      name: 'Партнерам',
      link: '#partners',
    },
  ];

  return (
    <div
      className={
        'p-4 fixed w-full z-50 px-12 bg-cYellow flex items-center justify-between'
      }>
      <div className={'w-full flex items-center gap-96'}>
        <Link href={'#top'}>
          <Logo className={'w-40 fill-cBlack'} />
        </Link>
        <div className={'flex gap-32 items-center'}>
          {links.map((item, key) => (
            <Link
              key={key}
              className={
                'font-base font-semibold hover:underline transition-all duration-300 uppercase'
              }
              href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className={'flex gap-4 items-center'}>
        <Telegram className={'w-16 aspect-square'} />
        <VK className={'w-16 aspect-square'} />
      </div>
    </div>
  );
};

export default Navbar;
