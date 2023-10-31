export * from './light';
/** 历史弃用主题 */
export * from './common/legacy';

import type { IChartLevelTheme } from '../../core/interface';
import { mergeTheme } from '../../util/spec/merge-theme';
import { getActualColor } from '../color-scheme/util';
import type { ITheme } from '../interface';
import { darkTheme } from './dark';
import { lightTheme } from './light';

/** 声明内置主题 */
export const builtinThemes: Record<string, ITheme> = {
  [lightTheme.name]: lightTheme,
  [darkTheme.name]: darkTheme
};
/** 声明默认主题 */
export const defaultThemeName = lightTheme.name;

/** 全局主题 map (包含用户新注册的主题) */
export const themes: Map<string, ITheme> = new Map(Object.keys(builtinThemes).map(key => [key, builtinThemes[key]]));
/** 主题 map 中的元素是否 merge 过默认主题 (非默认主题的其他内置主题没有 merge 过默认主题) */
export const hasThemeMerged: Map<string, boolean> = new Map(
  Object.keys(builtinThemes).map(key => [key, key === defaultThemeName])
);

/** 使新主题基于默认主题扩展，保证基础值 */
export const getMergedTheme = (theme: Partial<ITheme>): ITheme => mergeTheme({}, themes.get(defaultThemeName), theme);

export const defaultChartLevelTheme: IChartLevelTheme = {
  background: getActualColor(builtinThemes[defaultThemeName].background, builtinThemes[defaultThemeName].colorScheme),
  fontFamily: builtinThemes[defaultThemeName].fontFamily,
  colorScheme: builtinThemes[defaultThemeName].colorScheme
};
