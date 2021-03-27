import { ElseRender } from '../ElseRender';
import { ElseCanRender } from '../ElseCanRender';
import { ISplitComponentsParams, ISplitComponentsReturn } from '../interfaces/ISplitComponents';

export const splitComponents = ({ children }: ISplitComponentsParams): ISplitComponentsReturn => {
  const elseRender: any[] = [];
  const elseCanRender: any[] = [];

  const render = (Array.isArray(children) ? children : [children])?.filter((element) => {
    if (element?.type === ElseRender) {
      elseRender.push(element);
      return false;
    } if (element?.type === ElseCanRender) {
      elseCanRender.push(element);
      return false;
    }

    return true;
  });

  return {
    render,
    elseCanRender,
    elseRender,
  };
};

export const whenResolve = ({
  when, render, elseCanRender, elseRender,
}: { when: boolean } & ISplitComponentsReturn): any => {
  if (when) {
    return render;
  }

  const firstElseCanRender = elseCanRender.find(({ props }: any) => props?.when);
  return firstElseCanRender || elseRender;
};
