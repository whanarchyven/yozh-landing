import React from 'react';
const Team = () => {
  return (
    <div
      id={'team'}
      className={
        'bg-white flex flex-col items-center gap-32 lg:pt-32 pt-32 p-8 lg:p-32'
      }>
      <p className={'lg:text-8xl text-4xl font-bold uppercase text-cBlack'}>
        Наша команда
      </p>
      <div className={'grid w-full grid-cols-2 lg:grid-cols-5 gap-10'}>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/team/1.png'} />
        </div>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/team/2.png'} />
        </div>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/team/3.png'} />
        </div>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/team/4.png'} />
        </div>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/team/5.png'} />
        </div>
      </div>
    </div>
  );
};

export default Team;
