import type { DimensionEventParams } from '../../../event/events/dimension/interface';
import type { BaseEventParams } from '../../../event/interface';
import type { DimensionTooltipInfo, MarkTooltipInfo } from '../processor/interface';
import type { Datum, IShowTooltipOption } from '../../../typings';
import type { IComponent } from '../../interface';

export type TooltipHandlerParams = (BaseEventParams | DimensionEventParams) & {
  changePositionOnly?: boolean;
};

export interface ITooltipActiveTypeAsKeys<T, K> {
  mark: T;
  dimension: K;
}

export type TotalMouseEventData = {
  tooltipInfo: Partial<ITooltipActiveTypeAsKeys<MarkTooltipInfo, DimensionTooltipInfo>>;
  ignore: Partial<ITooltipActiveTypeAsKeys<boolean, boolean>>;
};

export const enum TooltipResult {
  /** tooltip 显示成功 */
  success = 0,
  /** tooltip 未成功显示 */
  failed = 1
}

export interface ITooltip extends IComponent {
  getVisible: () => boolean;
  showTooltip: (datum: Datum, options: IShowTooltipOption) => void;
}
