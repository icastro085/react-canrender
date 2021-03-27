import { ElseRender } from '../ElseRender';
import { ElseCanRender } from '../ElseCanRender';

export interface ISplitComponentsParams {
  children?: any;
}

export interface ISplitComponentsReturn {
  render?: any[];
  elseCanRender?: typeof ElseCanRender[],
  elseRender?: typeof ElseRender[],
}
