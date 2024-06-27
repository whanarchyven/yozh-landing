'use client';
import { FC, useEffect, useRef, useState } from 'react';

import Title from '@@/public/images/how-to-work/title.svg';

const HowToWorkBlock: FC = () => {
  const [activeSection, setActiveSection] = useState('Увидел');
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('data-section'));
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const getImageSrc = () => {
    switch (activeSection) {
      case 'Сфотографировал':
        return '/images/how-to-work/2.png';
      case 'Подписал':
        return '/images/how-to-work/3.png';
      case 'Ищи рядом':
        return '/images/how-to-work/4.png';
      default:
        return '/images/how-to-work/2.png';
    }
  };
  return (
    <div className={'relative bg-white'}>
      <div className={'pl-32 pt-32'}>
        <div
          className={
            'border-cYellow flex items-center justify-center h-32 border-dashed border-l-4 '
          }>
          <Title className={'w-1/2'} />
        </div>
        <div
          className={
            'border-cYellow pr-32 flex items-center justify-between pl-44 pt-80 border-dashed border-l-4 '
          }>
          <div className={'flex flex-col w-2/5 gap-10'}>
            <p className={'text-7xl font-bold uppercase'}>Увидел</p>
            <p className={'text-4xl leading-tight '}>
              Во время прогулок по городу можно встретить множество интересных
              событий и мероприятий. Это могут быть уличные концерты, ярмарки,
              спортивные соревнования или выставки. Вы можете случайно
              наткнуться на необычные уличные представления или встретить
              художников, создающих свои работы прямо на ваших глазах. В каждом
              городе всегда найдется что-то, что может удивить и порадовать.
              Обратите внимание на эти моменты и наслаждайтесь разнообразием
              городской жизни.
            </p>
          </div>
          <img
            className={'w-2/5'}
            src={'/images/how-to-work/1.jpg'}
            alt="Uvidel"
          />
        </div>
        <div
          className={
            'border-cYellow pl-44 pt-80 relative border-dashed border-l-4 '
          }>
          <div className="flex justify-between">
            {/* Левый блок с текстом */}
            <div className="w-2/5">
              <div
                ref={(el) => (sectionsRef.current[0] = el)}
                data-section="Сфотографировал"
                className={
                  'flex h-screen justify-center flex-col w-full gap-10'
                }>
                <p className={'text-7xl font-bold uppercase'}>
                  Сфотографировал
                </p>
                <p className={'text-4xl leading-tight '}>
                  Запечатлейте интересные моменты и события с помощью камеры
                  вашего телефона. Будь то яркое выступление уличного артиста,
                  красивый пейзаж или любое другое интересное событие, вы можете
                  легко сфотографировать его или снять на видео. Делитесь этими
                  моментами с другими пользователями приложения YOZH, чтобы они
                  также могли насладиться увиденным. Внесите свой вклад в
                  создание живой и активной городской среды, показывая, что
                  происходит вокруг вас. Ваши фотографии и видео помогут другим
                  людям узнать о новых местах и событиях.
                </p>
              </div>
              <div
                ref={(el) => (sectionsRef.current[1] = el)}
                data-section="Подписал"
                className={
                  'flex h-screen justify-center flex-col w-full gap-10'
                }>
                <p className={'text-7xl font-bold uppercase'}>Подписал</p>
                <p className={'text-4xl leading-tight '}>
                  Придумайте увлекательное и информативное описание к
                  происходящему событию. Расскажите другим пользователям, что
                  именно вы увидели, почему это событие интересно и почему стоит
                  на него обратить внимание. Добавьте детали, которые помогут
                  вашим подписчикам лучше понять контекст и атмосферу события.
                  Поделитесь своим &quot;Событием&quot; в приложении YOZH, чтобы
                  другие пользователи могли прочитать ваше описание и посмотреть
                  ваши фотографии и видео. Ваши рассказы помогут создать живую и
                  увлекательную хронику городской жизни.
                </p>
              </div>
              <div
                ref={(el) => (sectionsRef.current[2] = el)}
                data-section="Ищи рядом"
                className={
                  'flex h-screen justify-center flex-col w-full gap-10'
                }>
                <p className={'text-7xl font-bold uppercase'}>Ищи рядом</p>
                <p className={'text-4xl leading-tight '}>
                  Ищите &quot;события&quot; других пользователей на
                  интерактивной карте и будьте всегда в курсе того, что
                  происходит вокруг. С помощью функции поиска вы можете легко
                  находить мероприятия и события, которые происходят прямо рядом
                  с вами. Интерактивная карта позволяет фильтровать события по
                  интересам, местоположению и времени, чтобы вы могли быстро
                  находить то, что вам интересно. Используйте YOZH, чтобы
                  открывать для себя новые места и события, организованные
                  другими пользователями. Это отличная возможность узнать о
                  самых интересных и уникальных событиях в вашем городе.
                </p>
              </div>
            </div>

            {/* Правый блок с телефоном */}
            <div className="w-1/2 h-screen sticky top-28 flex items-center justify-center">
              <img
                src="/images/how-to-work/asset.svg"
                alt="Phone"
                className="max-w-full absolute right-0 h-full"
              />
              <img
                src={getImageSrc()}
                alt="YOZH"
                className="max-w-full absolute right-0 h-auto"
              />
              <img
                src={getImageSrc()}
                alt="YOZH"
                className="max-w-full absolute right-0 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWorkBlock;
