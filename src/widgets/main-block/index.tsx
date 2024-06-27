'use client';
import { FC } from 'react';
import Button from '@/shared/ui/button';
import SpinLeft from '@@/public/images/main-block-assets/spin_left.svg';
import StarLeft from '@@/public/images/main-block-assets/star_left.svg';
import StarRight from '@@/public/images/main-block-assets/star_right.svg';
import { motion } from 'framer-motion';

const MainBlock: FC = () => {
  return (
    <div
      className={
        'relative overflow-hidden flex min-h-screen flex-col p-14 justify-end items-center'
      }>
      <div className={'w-5/6 flex items-center relative justify-start'}>
        <img className={'w-full'} src={'images/main_image.png'} />
        <Button
          className={
            'absolute left-52 -mt-52 text-4xl px-20 py-8 cursor-pointer'
          }>
          ПРИСОЕДИНИТЬСЯ К БЕТА-ТЕСТУ
        </Button>
      </div>
      <div className={'flex -mt-64 w-4/6 relative items-center gap-32'}>
        <p className={'font-base font-semibold text-6xl'}>
          Мобильное <br /> приложение
          <br /> актуальных событий
        </p>
        <p className={'font-secondary font-semibold text-[20rem]'}>YOZH</p>
      </div>
      <motion.div
        className={'w-44 absolute -left-10 top-52'}
        animate={{ rotate: '-360deg' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 5,
        }}>
        <SpinLeft className={'w-full'} />
      </motion.div>
      <motion.div
        className={'w-44 absolute -right-10 bottom-52'}
        animate={{ rotate: '360deg' }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 5,
        }}>
        <SpinLeft className={'w-full'} />
      </motion.div>
      <motion.div
        className={'w-32 absolute -left-4 bottom-10'}
        initial={{ scale: 1 }}
        animate={{ scale: 2 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          duration: 1,
        }}>
        <StarLeft className={'w-full'} />
      </motion.div>
      <motion.div
        className={'w-80 absolute right-14 top-60'}
        initial={{ scale: 1 }}
        animate={{ scale: 2 }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          duration: 1,
        }}>
        <StarRight className={'w-full'} />
      </motion.div>
    </div>
  );
};

export default MainBlock;
