/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/ban-types */
import ButtonUnstyled, { buttonUnstyledClasses, ButtonUnstyledProps } from '@mui/core/ButtonUnstyled';
import { styled, Theme } from '@mui/system';
import PropTypes from 'prop-types';
import * as React from 'react';

const ButtonRoot = React.forwardRef(function BtnRoot(props: React.PropsWithChildren<{}>, ref: React.ForwardedRef<any>) {
  const { children, ...other } = props;

  return (
    <svg width='150' height='50' {...other} ref={ref}>
      <polygon points='0,50 0,0 150,0 150,50' className='bg' />
      <polygon points='0,50 0,0 150,0 150,50' className='borderEffect' />
      <foreignObject x='0' y='0' width='150' height='50'>
        <div className='content'>{children}</div>
      </foreignObject>
    </svg>
  );
});

const CustomButtonRoot = styled(ButtonRoot)(
  ({ theme }: { theme: Theme }) => `
  overflow: visible;
  cursor: pointer;
  --main-color: ${theme.palette.mode === 'light' ? 'rgb(235,39,84)' : 'rgb(235,39,84)'};
  --hover-color: ${theme.palette.mode === 'light' ? 'rgba(255,0,255,0.2)' : 'rgba(144,202,249,0.08)'};
  --active-color: ${theme.palette.mode === 'light' ? 'rgba(25,118,210,0.12)' : 'rgba(144,202,249,0.24)'};

  & polygon {
    fill: transparent;
    transition: all 800ms ease;
    pointer-events: none;
  }

  & .bg {
    stroke: var(--main-color);
    stroke-width: 0.5;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.1));
    fill: transparent;
  }

  & .borderEffect {
    stroke: var(--main-color);
    stroke-width: 2;
    stroke-dasharray: 150 600;
    stroke-dashoffset: 150;
    fill: transparent;
  }

  &:hover,
  &.${buttonUnstyledClasses.focusVisible} {
    .borderEffect {
      stroke-dashoffset: -600;
    }

    .bg {
      fill: var(--hover-color);
    }
  }

  &:focus,
  &.${buttonUnstyledClasses.focusVisible} {
    outline: none;
  }

  &.${buttonUnstyledClasses.active} {
    & .bg {
      fill: var(--active-color);
      transition: fill 300ms ease-out;
    }
  }

  & foreignObject {
    pointer-events: none;

    & .content {
      font-family: Helvetica, Inter, Arial, sans-serif;
      font-size: 14px;
      font-weight: 200;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--main-color);
      text-transform: uppercase;
    }

    & svg {
      margin: 0 5px;
    }
  }`
);

const SvgButton = React.forwardRef(function Svg(props: ButtonUnstyledProps, ref: React.ForwardedRef<any>) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} ref={ref} />;
});

export default function UnstyledButtonCustom(props: { ele: React.ReactNode }): JSX.Element {
  const { ele } = props;
  return <SvgButton>{ele}</SvgButton>;
}

UnstyledButtonCustom.propTypes = {
  ele: PropTypes.node.isRequired,
};
