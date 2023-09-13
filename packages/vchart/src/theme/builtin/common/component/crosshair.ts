import type {
  ICrosshairLineSpec,
  ICrosshairRectSpec,
  ICrosshairValueFieldSpec,
  ICrosshairCategoryFieldSpec,
  ICrosshairLabelSpec,
  ICrosshairTheme
} from '../../../../component/crosshair/interface';
import { THEME_CONSTANTS } from '../constants';

const getLabelSpec = (): ICrosshairLabelSpec => ({
  visible: false,
  style: {
    fontWeight: 'normal',
    fill: { type: 'palette', key: 'labelReverseFontColor' },
    fontSize: THEME_CONSTANTS.l5FontSize,
    //lineHeight: THEME_CONSTANTS.l5LineHeight,
    fontFamily: THEME_CONSTANTS.defaultFontFamily
  },
  labelBackground: {
    padding: {
      bottom: 0,
      top: 0,
      left: 2,
      right: 2
    },
    style: {
      fill: { type: 'palette', key: 'primaryFontColor' },
      outerBorder: {
        stroke: { type: 'palette', key: 'primaryFontColor' } as any,
        distance: 0,
        lineWidth: 3
      },
      cornerRadius: 1
    }
  }
});

const getBandField = (): ICrosshairCategoryFieldSpec => ({
  visible: false,
  line: {
    type: 'rect',
    visible: true,
    style: {
      fill: { type: 'palette', key: 'axisGridColor' },
      opacity: 0.7,
      lineDash: []
    }
  } as ICrosshairRectSpec,
  label: getLabelSpec()
});

const getLinearField = (): ICrosshairValueFieldSpec => ({
  visible: false,
  line: {
    type: 'line',
    visible: true,
    style: {
      stroke: { type: 'palette', key: 'secondaryFontColor' },
      opacity: 0.7,
      lineDash: [2, 3]
    }
  } as ICrosshairLineSpec,
  label: getLabelSpec()
});

export const crosshair: ICrosshairTheme = {
  trigger: 'hover',
  bandField: getBandField(),
  linearField: getLinearField()
};
