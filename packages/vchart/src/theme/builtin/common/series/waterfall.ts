import type { IWaterfallSeriesTheme } from '../../../../series/waterfall/interface';
import { THEME_CONSTANTS } from '../constants';

export const waterfall: IWaterfallSeriesTheme = {
  seriesFieldName: {
    total: 'total',
    increase: 'increase',
    decrease: 'decrease'
  },
  leaderLine: {
    style: {
      stroke: 'black',
      lineWidth: 1,
      lineDash: [4, 4]
    }
  },
  stackLabel: {
    visible: true,
    offset: 12,
    position: 'withChange',
    style: {
      fill: 'black',
      fontSize: THEME_CONSTANTS.l4FontSize
    }
  },
  label: {
    visible: false,
    offset: 12,
    position: 'inside',
    style: {
      lineWidth: 2
    }
  }
};
