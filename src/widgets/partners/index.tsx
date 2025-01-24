'use client';
import { FC } from 'react';
import SpinLeft from '@@/public/images/asset_spin_white.svg';
import { motion } from 'framer-motion';

const Index: FC = () => {
  return (
    <div id={'partners'} className={'bg-cYellow lg:p-32 p-8'}>
      <div className={'flex w-full gap-96 items-end'}>
        <img className={'lg:w-1/2'} src={'/images/partners/title.svg'} />
        <motion.div
          className={'w-60 '}
          animate={{ rotate: '360deg' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: 5,
          }}>
          <SpinLeft className={'w-full'} />
        </motion.div>
      </div>
      <div
        className={
          'flex lg:flex-row flex-col mt-10 lg:pl-32 lg:mt-32 items-center w-full gap-4'
        }>
        <img className={'lg:w-1/2'} src={'/images/partners/map.svg'} />
        <p className={'lg:text-4xl text-2xl leading-tight '}>
          Наши партнеры предлагают эксклюзивные скидки и акции для пользователей
          приложения YOZH. Воспользуйтесь купонами на разнообразные развлечения,
          такие как киносеансы, концерты и другие мероприятия. Откройте для себя
          новые места и впечатления по специальным ценам. Просто покажите купон
          из приложения и наслаждайтесь скидками от наших партнеров. Постоянные
          обновления и новые предложения ждут вас, чтобы сделать ваш досуг еще
          интереснее и доступнее.
        </p>
      </div>
    </div>
  );
};

export default Index;
