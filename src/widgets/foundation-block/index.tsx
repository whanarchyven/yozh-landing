'use client';
import { FC } from 'react';

const MainBlock: FC = () => {
  return (
    <div
      className={
        'lg:p-4 p-12 lg:px-32 bg-cWhite flex lg:flex-row flex-col gap-8 justify-center items-center'
      }>
      <img className={'w-[400px]'} src={'/images/foundation.png'} />
      <p className={'font-base font-medium text-center lg:text-5xl'}>
        * Проект создан при поддержке Федерального государственного бюджетного
        учреждения &quot;Фонд содействия развитию малых форм предприятий в
        научно-технической сфере в рамках программы &quot;Студенческий
        стартап&quot; федерального проекта &quot;Платформа университетского
        технологического предпринимательства
      </p>
    </div>
  );
};

export default MainBlock;
