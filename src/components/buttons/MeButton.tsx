import clsx from 'clsx';

export type MeButtonProp = {
  width?: number;
  height?: number;
  className?: string;
  children: React.ReactNode;
};

const MeButton = ({ width: w = 150, height: h = 50, className, children }: MeButtonProp) => {
  return (
    <svg width='150' height='50' className={clsx('overflow-visible cursor-pointer focus:outline-none group', className)}>
      <polygon
        points={`0,${h} 0,0 ${w},0 ${w},${h}`}
        className='fill-transparent transition-all duration-800 delay-0 ease-default pointer-events-none stroke-lrred stroke-0.5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] group-hover:fill-[rgba(255,0,255,0.2)]'
      />
      <polygon
        points={`0,${h} 0,0 ${w},0 ${w},${h}`}
        className='fill-transparent transition-all duration-800 delay-0 ease-default pointer-events-none stroke-lrred stroke-2 [stroke-dasharray:150_600] [stroke-dashoffset:150] group-hover:[stroke-dashoffset:-600]'
      />
      <foreignObject x='0' y='0' width={w} height={h} className='pointer-events-none'>
        <div className='font-[Helvetica,Inter,Arial,sans-serif]text-[14px] font-extralight h-full flex items-center justify-center text-primary-300 uppercase'>
          {children}
        </div>
      </foreignObject>
    </svg>
  );
};

export default MeButton;
