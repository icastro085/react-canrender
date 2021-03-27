import React from 'react';
import { ICanRenderProps } from './interfaces/ICanRenderProps';
import { CanRenderBase } from './CanRenderBase';

export const CanRender = (props: ICanRenderProps) => <CanRenderBase {...props} />;
