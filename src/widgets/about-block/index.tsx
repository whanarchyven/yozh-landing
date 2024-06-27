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
    <div id={"about"} className={'bg-cYellow overflow-hidden relative'}>
      <div className={'p-60'}>
        <Title className={'w-[700px]'} />
        <div className={'relative w-full flex flex-col items-center gap-3'}>
          <div className={'w-3/4 mt-32 flex justify-between items-center'}>
            <div className={'flex items-center gap-12'}>
              <Walk />
              <p className={'text-5xl'}>
                Ходи на <br /> “прогулки” и <br /> изучай город
              </p>
            </div>
            <div className={'flex items-center gap-12'}>
              <Activity />
              <p className={'text-5xl'}>
                Будь активным и <br /> получай призы от <br /> партнеров
              </p>
            </div>
          </div>
          <div className={'w-3/5 mt-32 flex justify-between items-center'}>
            <div className={'flex items-center gap-12'}>
              <Events />
              <p className={'text-5xl'}>
                Будь в курсе
                <br /> событий
                <br /> города
              </p>
            </div>
            <div className={'flex items-center gap-12'}>
              <Comments />
              <p className={'text-5xl'}>
                Оценивай и <br />
                комментируй
              </p>
            </div>
          </div>
        </div>
      </div>
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
        <StarRight className={'w-full stroke-cWhite'} />
      </motion.div>
      <Asset className={'w-full absolute bottom-96 stroke-cWhite'} />
      <BlockWrapper color={'white'} />
    </div>
  );
};

export default AboutBlock;
