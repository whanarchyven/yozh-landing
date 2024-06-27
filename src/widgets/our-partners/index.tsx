import React from 'react';
import BlockWrapper from '@/features/block-wrapper';
const OurPartners = () => {
  return (
    <div className={'bg-cYellow flex flex-col items-center gap-32'}>
      <img
        className={'w-[1200px] pl-32 pt-32 self-start'}
        src={'/images/our-partners/title.svg'}
      />
      <div className={'grid w-[1200px] grid-cols-3 gap-12'}>
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
