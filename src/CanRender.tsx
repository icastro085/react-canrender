import React from 'react';
import { splitComponents, whenResolve } from './helpers';

export interface ICanRenderProps {
  children?: any;
  when: boolean;
}

export interface IElseRenderProps {
  children?: any;
}

const CanRenderBase = ({ children, when }: ICanRenderProps) => {
  const { render, elseCanRender, elseRender } = splitComponents({ children });
  return whenResolve({
    when,
    render,
    elseCanRender,
    elseRender,
  });
};

export const CanRender = (props: ICanRenderProps) => <CanRenderBase {...props} />;

CanRender.defaultProps = {
  componentType: 'CanRender',
};

export const ElseCanRender = (props: ICanRenderProps) => <CanRenderBase {...props} />;

ElseCanRender.defaultProps = {
  componentType: 'ElseCanRender',
};

export const ElseRender = ({ children }: IElseRenderProps) => <>{ children }</>;

ElseRender.defaultProps = {
  componentType: 'ElseRender',
};
