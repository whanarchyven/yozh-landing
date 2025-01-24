import Button from '@/shared/ui/button';
import Logo from '@@/public/images/logo.svg';
const Footer = () => {
  return (
    <div className={'bg-black flex flex-col items-center lg:p-96 gap-20 p-8'}>
      <div
        className={
          'flex lg:flex-col flex-col items-center justify-center gap-12'
        }>
        <p
          className={
            'uppercase font-bold leading-tight text-white text-4xl lf:text-left text-center lg:text-8xl'
          }>
          Ну что, готовы <br />
          протестировать{' '}
        </p>
        <div className={'flex items-center gap-10'}>
          <Logo className={'w-60 lg:w-[400px] fill-cWhite'} />
          <p
            className={
              'uppercase font-bold font-secondary leading-tight text-white lg:text-[20rem] text-6xl'
            }>
            ?
          </p>
        </div>
      </div>
      <Button className={'lg:text-4xl lg:h-32 cursor-pointer lg:w-1/3'}>
        Присоединиться к бета-тесту
      </Button>
    </div>
  );
};

export default Footer;
