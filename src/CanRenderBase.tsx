import { ICanRenderProps } from './interfaces/ICanRenderProps';
import { splitComponents, whenResolve } from './helpers';

export const CanRenderBase = ({ children, when }: ICanRenderProps) => {
  const { render, elseCanRender, elseRender } = splitComponents({ children });
  return whenResolve({
    when, render, elseCanRender, elseRender,
  });
};
