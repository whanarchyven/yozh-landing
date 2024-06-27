import React from 'react';
const TourRoutes = () => {
  return (
    <div className={'bg-cYellow flex flex-col items-center gap-32 p-96'}>
      <img className={'w-[1200px]'} src={'/images/tour-routes/title.svg'} />
      <div className={'grid w-[1200px] grid-cols-3 gap-44'}>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/tour-routes/1.png'} />
          <p className={'text-5xl font-bold'}>Прогулки</p>
          <p className={'text-4xl text-center font-normal'}>
            Собрали все самые интересные способы интересно провести время
          </p>
        </div>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/tour-routes/2.png'} />
          <p className={'text-5xl font-bold'}>Места</p>
          <p className={'text-4xl text-center font-normal'}>
            Все достопримечательности и интересности в твоём смартфоне
          </p>
        </div>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/tour-routes/3.png'} />
          <p className={'text-5xl font-bold'}>Маршруты</p>
          <p className={'text-4xl text-center font-normal'}>
            Сами построим маршурт, чтобы всё посетить
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourRoutes;
