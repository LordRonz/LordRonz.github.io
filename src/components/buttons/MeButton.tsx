import { CSSProperties } from 'react';

import style from '@/styles/MeButton.module.css';

interface MeButtonProp {
  children: JSX.Element | JSX.Element[];
}

const bgStyle: CSSProperties = {
  filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1))',
};

const MeButton = ({ children }: MeButtonProp) => {
  return (
    <svg width='150' height='50' className={`${style.svg} overflow-visible cursor-pointer focus:outline-none`}>
      <polygon
        points='0,50 0,0 150,0 150,50'
        className={`${style.bg} fill-transparent transition-all duration-800 delay-0 ease-default pointer-events-none stroke-lrred stroke-0.5`}
        style={bgStyle}
      />
      <polygon
        points='0,50 0,0 150,0 150,50'
        className={`${style.borderEffect} fill-transparent transition-all duration-800 delay-0 ease-default pointer-events-none stroke-lrred stroke-2`}
      />
      <foreignObject x='0' y='0' width='150' height='50' className={`${style.foreignObj} pointer-events-none`}>
        <div className={style.content}>{children}</div>
      </foreignObject>
    </svg>
  );
};

export default MeButton;
