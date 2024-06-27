import Button from '@/shared/ui/button';

const Footer = () => {
  return (
    <div className={'bg-black flex flex-col items-center p-96 gap-20'}>
      <div className={'flex items-center justify-center gap-12'}>
        <p className={'uppercase font-bold leading-tight text-white text-8xl'}>
          Ну что, готовы <br />
          протестировать{' '}
        </p>
        <p
          className={
            'uppercase font-bold font-secondary leading-tight text-white text-[20rem]'
          }>
          YOZH ?
        </p>
      </div>
      <Button className={'text-4xl h-32 cursor-pointer w-1/3'}>
        Присоединиться к бета-тесту
      </Button>
    </div>
  );
};

export default Footer;
