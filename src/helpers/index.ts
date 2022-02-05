import React from 'react';

enum ComponentType {
  CanRender = 'CanRender',
  ElseCanRender = 'ElseCanRender',
  ElseRender = 'ElseRender',
}

export interface ISplitComponentsParams {
  children?: any
}

export interface ISplitComponentsReturn {
  render?: any[]
  elseCanRender?: {
    (props: any): JSX.Element;
    defaultProps: {
      componentType: string;
    };
  }[]
  elseRender?: {
    (props: any): JSX.Element;
    defaultProps: {
      componentType: string;
    };
  }[]
}

export const typeOfComponent = (
  component: React.FunctionComponentElement<any>,
): ComponentType => component?.props?.componentType
  || component?.type
    ?.toString()
    .replace('Symbol(react.fragment)', 'react.fragment')
  || undefined;

export const splitComponents = ({
  children,
}: ISplitComponentsParams): ISplitComponentsReturn => {
  const elseRender: any[] = [];
  const elseCanRender: any[] = [];

  const render = (Array.isArray(children) ? children : [children])?.filter(
    (element) => {
      const elementType = typeOfComponent(element);

      if (elementType === ComponentType.ElseRender.toString()) {
        elseRender.push(element);
        return false;
      }

      if (elementType === ComponentType.ElseCanRender.toString()) {
        elseCanRender.push(element);
        return false;
      }

      return true;
    },
  );

  return {
    render,
    elseCanRender,
    elseRender,
  };
};

export const whenResolve = ({
  when,
  render,
  elseCanRender,
  elseRender,
}: { when: boolean } & ISplitComponentsReturn): any => {
  if (when) {
    return render;
  }

  const firstElseCanRender = elseCanRender?.find(
    ({ props }: any) => props?.when,
  );
  return firstElseCanRender || elseRender;
};
