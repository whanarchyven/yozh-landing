import React from 'react';
import BlockWrapper from '@/features/block-wrapper';
const OurPartners = () => {
  return (
    <div className={'bg-cYellow flex flex-col items-center lg:p-0 p-8 gap-32'}>
      <img
        className={'lg:w-[1200px] lg:pl-32 lg:pt-32 self-start'}
        src={'/images/our-partners/title.svg'}
      />
      <div className={'grid lg:w-[1200px] lg:grid-cols-3 gap-12'}>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/our-partners/1.jpg'} />
        </div>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/our-partners/2.png'} />
        </div>
        <div className={'flex w-full flex-col gap-12 items-center'}>
          <img className={'w-full'} src={'/images/our-partners/3.png'} />
        </div>
      </div>
      <BlockWrapper color={'black'} />
    </div>
  );
};

export default OurPartners;
