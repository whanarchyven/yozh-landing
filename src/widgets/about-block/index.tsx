'use client';
import { FC } from 'react';
import Title from '@@/public/images/about/title.svg';
import Walk from '@@/public/images/about/walk.svg';
import Activity from '@@/public/images/about/active.svg';
import Events from '@@/public/images/about/events.svg';
import Comments from '@@/public/images/about/comments.svg';
import BlockWrapper from '@/features/block-wrapper';
import StarRight from '@@/public/images/about/star_right.svg';
import Asset from '@@/public/images/about/asset.svg';
import { motion } from 'framer-motion';
const AboutBlock: FC = () => {
  return (
    <div
      id={'about'}
      className={'bg-cYellow overflow-hidden relative pt-16 lg:pt-0'}>
      <div className={'lg:p-60 p-14'}>
        <Title className={'lg:w-[700px]'} />
        <div
          className={
            'relative w-full lg:mt-0 mt-12 flex flex-col items-center gap-10 lg:gap-3'
          }>
          <div
            className={
              'lg:w-3/4 w-full lg:mt-32 flex lg:flex-row flex-col lg:gap-0 gap-10 lg:justify-between items-center'
            }>
            <div
              className={
                'flex lg:w-auto w-full justify-between lg:justify-start lg:text-left text-right lg:items-center gap-12'
              }>
              <Walk className={'lg:w-40 w-28'} />
              <p className={'lg:text-5xl'}>
                Ходи на <br /> “прогулки” и <br /> изучай город
              </p>
            </div>
            <div
              className={
                'flex lg:w-auto w-full justify-between lg:justify-start lg:text-left text-right lg:items-center gap-12'
              }>
              <Activity className={'lg:w-52 w-28'} />
              <p className={'lg:text-5xl'}>
                Будь активным и <br /> получай призы от <br /> партнеров
              </p>
            </div>
          </div>
          <div
            className={
              'lg:w-3/5 w-full lg:mt-32 flex lg:flex-row flex-col lg:gap-0 gap-10 lg:justify-between items-center'
            }>
            <div
              className={
                'flex lg:w-auto w-full justify-between lg:justify-start lg:text-left text-right items-center gap-12'
              }>
              <Events className={'lg:w-52 w-28'} />
              <p className={'lg:text-5xl'}>
                Будь в курсе
                <br /> событий
                <br /> города
              </p>
            </div>
            <div
              className={
                'flex lg:w-auto w-full justify-between lg:justify-start lg:text-left text-right items-center gap-12'
              }>
              <Comments className={'lg:w-52 w-28'} />
              <p className={'lg:text-5xl'}>
                Оценивай и <br />
                комментируй
              </p>
            </div>
          </div>
        </div>
      </div>
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
        <StarRight className={'w-full stroke-cWhite'} />
      </motion.div>
      <Asset
        className={'w-full lg:flex hidden absolute bottom-96 stroke-cWhite'}
      />
      <BlockWrapper color={'white'} />
    </div>
  );
};

export default AboutBlock;
