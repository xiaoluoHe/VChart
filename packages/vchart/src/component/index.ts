/* eslint-disable no-duplicate-imports */
/**
 * @description export all component modules
 */
import type { IScrollBarSpec, IScrollBarTheme } from './data-zoom/scroll-bar';
import { ScrollBar, registerScrollBar } from './data-zoom/scroll-bar/scroll-bar';
import type { IDataZoomSpec, IDataZoomTheme } from './data-zoom/data-zoom';
import { DataZoom, registerDataZoom } from './data-zoom/data-zoom/data-zoom';
import { CustomMark, registerCustomMark } from './custom-mark/custom-mark';
import type { IBrushSpec, IBrushTheme } from './brush';
import { Brush, registerBrush } from './brush/brush';
import type { IMapLabelSpec, IMapLabelTheme } from './map-label';
import { MapLabelComponent, registerMapLabel } from './map-label/component';
import type {
  ICartesianLinearAxisSpec,
  ICartesianBandAxisSpec,
  ICartesianTimeAxisSpec,
  ICartesianAxisSpec,
  ICartesianLogAxisSpec,
  ICartesianAxisCommonTheme
} from './axis/cartesian/index';
import {
  CartesianAxis,
  CartesianLinearAxis,
  CartesianBandAxis,
  CartesianTimeAxis,
  CartesianLogAxis,
  CartesianSymlogAxis,
  registerCartesianBandAxis,
  registerCartesianLinearAxis,
  registerCartesianLogAxis,
  registerCartesianSymlogAxis,
  registerCartesianTimeAxis
} from './axis/cartesian/index';
import type { IPolarAxisCommonTheme, IPolarAxisSpec, IPolarBandAxisSpec, IPolarLinearAxisSpec } from './axis/polar';
import {
  PolarAxis,
  PolarBandAxis,
  PolarLinearAxis,
  registerPolarBandAxis,
  registerPolarLinearAxis
} from './axis/polar';
import type { IDiscreteLegendSpec, IDiscreteLegendTheme } from './legend/discrete';
import { DiscreteLegend, registerDiscreteLegend } from './legend/discrete';
import type {
  IColorLegendTheme,
  IContinuousLegendSpec,
  IContinuousLegendTheme,
  ISizeLegendTheme
} from './legend/continuous';
import { ContinuousLegend, registerContinuousLegend } from './legend/continuous';
import type { IIndicatorSpec, IIndicatorTheme } from './indicator';
import { Indicator, registerIndicator } from './indicator';
import type { ITitleSpec, ITitleTheme } from './title';
import { Title, registerTitle } from './title';
import type { IGeoCoordinateSpec } from './geo';
import { GeoCoordinate, registerGeoCoordinate } from './geo';
import type { ICartesianCrosshairSpec, ICrosshairTheme, IPolarCrosshairSpec } from './crosshair';
import { CartesianCrossHair, PolarCrossHair, registerCartesianCrossHair, registerPolarCrossHair } from './crosshair';
import type { IPlayerSpec, IPlayerTheme } from './player';
import { Player, registerPlayer } from './player';
import type { IMarkLineSpec, IMarkLineTheme } from './marker/mark-line';
import { MarkLine, registerMarkLine } from './marker/mark-line';
import type { IMarkAreaSpec, IMarkAreaTheme } from './marker/mark-area';
import { MarkArea, registerMarkArea } from './marker/mark-area';
import type { IMarkPointSpec, IMarkPointTheme } from './marker/mark-point';
import { MarkPoint, registerMarkPoint } from './marker/mark-point';
import type { ITooltipSpec, ITooltipTheme } from './tooltip';
import { Tooltip, registerTooltip } from './tooltip';
import type { ILabelSpec, ITotalLabelTheme } from './label';
import { Label, registerLabel } from './label';
import { TotalLabel, registerTotalLabel } from './label/totalLabel';
import { registerPoptip } from './poptip/index';
import { IComponentTheme } from './interface';
import { IAxisCommonTheme, IAxisItemTheme, IBandAxisTheme } from './axis';
import { IPoptipTheme } from './poptip/interface';

export {
  ScrollBar,
  DataZoom,
  CustomMark,
  Brush,
  MapLabelComponent,
  CartesianAxis,
  CartesianBandAxis,
  CartesianLinearAxis,
  CartesianTimeAxis,
  CartesianLogAxis,
  CartesianSymlogAxis,
  PolarAxis,
  PolarBandAxis,
  PolarLinearAxis,
  DiscreteLegend,
  ContinuousLegend,
  Indicator,
  Title,
  GeoCoordinate,
  CartesianCrossHair,
  PolarCrossHair,
  Player,
  MarkArea,
  MarkLine,
  MarkPoint,
  Tooltip,
  Label,
  TotalLabel
};

export {
  registerBrush,
  registerScrollBar,
  registerTitle,
  registerTooltip,
  registerCartesianBandAxis,
  registerCartesianCrossHair,
  registerCartesianLinearAxis,
  registerCartesianLogAxis,
  registerCartesianSymlogAxis,
  registerCartesianTimeAxis,
  registerContinuousLegend,
  registerCustomMark,
  registerDataZoom,
  registerDiscreteLegend,
  registerGeoCoordinate,
  registerIndicator,
  registerLabel,
  registerTotalLabel,
  registerMapLabel,
  registerMarkArea,
  registerMarkLine,
  registerMarkPoint,
  registerPlayer,
  registerPolarBandAxis,
  registerPolarCrossHair,
  registerPolarLinearAxis,
  registerPoptip
};

export type {
  IScrollBarSpec,
  IBrushSpec,
  ICartesianAxisSpec,
  ICartesianBandAxisSpec,
  ICartesianCrosshairSpec,
  ICartesianLinearAxisSpec,
  ICartesianTimeAxisSpec,
  ICartesianLogAxisSpec,
  IContinuousLegendSpec,
  IDataZoomSpec,
  IDiscreteLegendSpec,
  IGeoCoordinateSpec,
  IIndicatorSpec,
  ILabelSpec,
  IMapLabelSpec,
  IMarkAreaSpec,
  IMarkLineSpec,
  IMarkPointSpec,
  IPlayerSpec,
  IPolarAxisSpec,
  IPolarBandAxisSpec,
  IPolarCrosshairSpec,
  IPolarLinearAxisSpec,
  ITitleSpec,
  ITooltipSpec
};

export {
  IComponentTheme,
  ICrosshairTheme,
  IAxisItemTheme,
  IAxisCommonTheme,
  IBandAxisTheme,
  IPolarAxisCommonTheme,
  ICartesianAxisCommonTheme,
  IBrushTheme,
  IDataZoomTheme,
  IScrollBarTheme,
  IIndicatorTheme,
  IMapLabelTheme,
  ITotalLabelTheme,
  ISizeLegendTheme,
  IColorLegendTheme,
  IDiscreteLegendTheme,
  IContinuousLegendTheme,
  IMarkAreaTheme,
  IMarkLineTheme,
  IMarkPointTheme,
  IPlayerTheme,
  IPoptipTheme,
  ITitleTheme,
  ITooltipTheme
};
