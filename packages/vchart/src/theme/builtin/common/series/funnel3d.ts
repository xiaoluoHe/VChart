import type { IFunnel3dSeriesTheme } from '../../../../series/funnel/interface';

export const funnel3d: IFunnel3dSeriesTheme = {
  transform3d: {
    style: {
      fill: '#f5f5f5'
    }
  },
  label: {
    style: {
      fill: 'white',
      textBaseline: 'middle',
      lineWidth: 2
    }
  },
  outerLabel: {
    style: {
      fontSize: { type: 'token', key: 'l4FontSize' },
      fill: '#707070'
    },
    line: {
      style: {
        stroke: { type: 'palette', key: 'axisDomainColor' }
      }
    }
  },
  transformLabel: {
    style: {
      fontSize: { type: 'token', key: 'l4FontSize' },
      fill: '#707070',
      textBaseline: 'middle'
    }
  }
};
