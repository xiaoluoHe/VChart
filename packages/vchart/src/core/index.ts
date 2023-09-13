import { Logger, LoggerLevel } from '@visactor/vutils';
/**
 * @description The core module of VChart, containing the necessary interfaces for using VChart.
 */

import { VChart } from './vchart';
import { Factory } from './factory';
import { Region } from '../region/region';
import { Layout } from '../layout/base-layout';
import { GroupMark } from '../mark/group';
import { ComponentMark } from '../mark/component';
import { ImageMark } from '../mark/image';

// register groupMark and componentMark
VChart.useMark([ComponentMark, GroupMark, ImageMark]);

// install region module
Factory.registerRegion('region', Region as any);

// install layout module
Factory.registerLayout('base', Layout as any);

export { VChart, Factory };

// export the version
export const version = __VERSION__;

// export necessary types
export type { IVChart } from './interface';
// the event types
export * from '../event/interface';
export * from '../typings/spec/common';
export type { IStateSpec, StateValueType } from '../compile/mark';
export * from '../theme/interface';

// set default logger level to Level.error
Logger.getInstance(LoggerLevel.Error);
