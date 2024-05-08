export type ChartType = keyof typeof ChartTypeEnum | string;
export declare const enum ChartTypeEnum {
    common = "common",
    area = "area",
    line = "line",
    bar = "bar",
    bar3d = "bar3d",
    histogram = "histogram",
    histogram3d = "histogram3d",
    rangeColumn = "rangeColumn",
    rangeColumn3d = "rangeColumn3d",
    rangeArea = "rangeArea",
    map = "map",
    pie = "pie",
    pie3d = "pie3d",
    radar = "radar",
    rose = "rose",
    scatter = "scatter",
    sequence = "sequence",
    circularProgress = "circularProgress",
    linearProgress = "linearProgress",
    wordCloud = "wordCloud",
    wordCloud3d = "wordCloud3d",
    funnel = "funnel",
    funnel3d = "funnel3d",
    waterfall = "waterfall",
    boxPlot = "boxPlot",
    gauge = "gauge",
    sankey = "sankey",
    treemap = "treemap",
    sunburst = "sunburst",
    circlePacking = "circlePacking",
    heatmap = "heatmap",
    correlation = "correlation",
    liquid = "liquid",
    venn = "venn"
}
