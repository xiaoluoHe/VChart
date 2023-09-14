{{ target: component-base-marker }}

#${prefix} relativeSeriesIndex(number)

被标注数据关联的series索引。

#${prefix} relativeSeriesId(string)

被标注数据关联的series ID。

#${prefix} visible(boolean) = true

标注组件是否可见。

#${prefix} clip(boolean) = false
自`1.3.0`版本开始支持，marker组件超出图表区域是否被裁剪。

#${prefix} interactive(boolean) = false

标注组件是否可交互。

#${prefix} autoRange(boolean) = false

marker组件是否自动拓展轴范围。

#${prefix} id(string | number)

标注组件ID。

{{ use: common-layout-item(
  prefix = ${prefix},
  defaultLayoutType = ${defaultLayoutType},
  defaultLayoutLevel = ${defaultLayoutLevel},
  defaultLayoutZIndex = ${defaultLayoutZIndex},
  noOrient = true,
  noClip = true
) }}

