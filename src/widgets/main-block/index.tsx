'use client';
import { FC } from 'react';
import Button from '@/shared/ui/button';
import SpinLeft from '@@/public/images/main-block-assets/spin_left.svg';
import StarLeft from '@@/public/images/main-block-assets/star_left.svg';
import StarRight from '@@/public/images/main-block-assets/star_right.svg';
import { motion } from 'framer-motion';
import Logo from '@@/public/images/logo.svg';

const MainBlock: FC = () => {
  return (
    <div
      className={
        'relative overflow-hidden flex h-screen flex-col lg:p-14 justify-between lg:gap-0 gap-12 px-10 pt-52 lg:justify-end items-center'
      }>
      <div className={'flex lg:hidden flex-col gap-8 items-center'}>
        <Logo className={'w-80'} />
        <p className={'font-base font-semibold text-center text-4xl'}>
          Мобильное приложение
          <br /> актуальных событий
        </p>
        <p className={'font-base font-medium text-center text-xl'}>
          * Проект создан при поддержке Федерального государственного бюджетного
          учреждения &quot;Фонд содействия развитию малых форм предприятий в
          научно-технической сфере в рамках программы &quot;Студенческий
          стартап&quot; федерального проекта &quot;Платформа университетского
          технологического предпринимательства
        </p>
      </div>
      <img
        className={'lg:hidden flex-1'}
        src={'/images/main-block-assets/mock_mobile.png'}
      />
      <Button
        className={
          'absolute text-3xl p-8 flex lg:hidden self-center bottom-12'
        }>
        ПРИСОЕДИНИТЬСЯ К БЕТА-ТЕСТУ
      </Button>
      <div
        className={'w-5/6 lg:flex hidden items-center relative justify-start'}>
        <img className={'w-full'} src={'images/main_image.png'} />
        <Button
          className={
            'absolute left-52 -mt-52 text-4xl px-20 py-8 cursor-pointer'
          }>
          ПРИСОЕДИНИТЬСЯ К БЕТА-ТЕСТУ
        </Button>
      </div>
      <div
        className={'lg:flex hidden -mt-64 w-4/6 relative items-center gap-32'}>
        <p className={'font-base font-semibold text-6xl'}>
          Мобильное <br /> приложение
          <br /> актуальных событий
        </p>
        <Logo className={'w-60 lg:w-[400px]'} />
        {/*<p className={'font-secondary font-semibold text-[20rem]'}>YOZH</p>*/}
      </div>
      <p className={'font-base font-medium text-center text-3xl w-2/3'}>
        * Проект создан при поддержке Федерального государственного бюджетного
        учреждения &quot;Фонд содействия развитию малых форм предприятий в
        научно-технической сфере в рамках программы &quot;Студенческий
        стартап&quot; федерального проекта &quot;Платформа университетского
        технологического предпринимательства
      </p>
      <motion.div
        className={'w-44 absolute lg:flex hidden -left-10 top-52'}
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
        className={'w-44 absolute lg:flex hidden -right-10 bottom-52'}
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
        className={'w-32 absolute lg:flex hidden -left-4 bottom-10'}
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
        className={'w-80 absolute lg:flex hidden right-14 top-60'}
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
