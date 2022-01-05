import style from '@/styles/MeButton.module.css';

export type MeButtonProp = {
  children: JSX.Element | JSX.Element[];
};

const MeButton = ({ children }: MeButtonProp) => {
  return (
    <svg width='150' height='50' className='overflow-visible cursor-pointer focus:outline-none group'>
      <polygon
        points='0,50 0,0 150,0 150,50'
        className='fill-transparent transition-all duration-800 delay-0 ease-default pointer-events-none stroke-lrred stroke-0.5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] group-hover:fill-[rgba(255,0,255,0.2)]'
      />
      <polygon
        points='0,50 0,0 150,0 150,50'
        className='fill-transparent transition-all duration-800 delay-0 ease-default pointer-events-none stroke-lrred stroke-2 [stroke-dasharray:150_600] [stroke-dashoffset:150] group-hover:[stroke-dashoffset:-600]'
      />
      <foreignObject x='0' y='0' width='150' height='50' className={`${style.foreignObj} pointer-events-none`}>
        <div className={style.content}>{children}</div>
      </foreignObject>
    </svg>
  );
};

export default MeButton;
