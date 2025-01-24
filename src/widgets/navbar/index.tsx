'use client';
import { FC, useState } from 'react';
import Logo from '@@/public/images/logo.svg';
import Telegram from '@@/public/images/social_medias/telegram.svg';
import VK from '@@/public/images/social_medias/vk.svg';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import Link from 'next/link';
import clsx from 'clsx';

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

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <motion.div
      variants={{ open: { height: '100%' }, closed: { height: 'auto' } }}
      animate={isMenuOpened ? 'open' : 'closed'}
      className={clsx('fixed flex flex-col w-full z-50 bg-cYellow')}>
      <div className={'flex p-4  px-12  items-center justify-between'}>
        <div className={'w-full flex items-center gap-20 xl:gap-96'}>
          <Link href={'#top'}>
            <Logo className={'w-40 fill-cBlack'} />
          </Link>
          <div className={'hidden lg:flex gap-32 items-center'}>
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
        <div className={'hidden lg:flex gap-4 items-center'}>
          <Telegram className={'w-16 aspect-square'} />
          <VK className={'w-16 aspect-square'} />
        </div>
        <div
          onClick={() => {
            setIsMenuOpened(!isMenuOpened);
          }}
          className={'lg:hidden flex'}>
          {isMenuOpened ? <X /> : <Menu />}
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpened && (
          <motion.div
            transition={{ duration: 0.3 }}
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: '-20%' },
            }}
            initial={'closed'}
            animate={'open'}
            exit={'closed'}
            className={
              'flex flex-col gap-5 p-12 items-start justify-between flex-1 bg-cYellow  w-full'
            }>
            <div className={'flex flex-col gap-12'}>
              {links.map((item, key) => (
                <Link
                  onClick={() => {
                    setIsMenuOpened(false);
                  }}
                  key={key}
                  className={
                    'font-base text-4xl font-semibold hover:underline transition-all duration-300 uppercase'
                  }
                  href={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className={'flex gap-8 items-center'}>
              <Telegram className={'w-24 aspect-square'} />
              <VK className={'w-24 aspect-square'} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
