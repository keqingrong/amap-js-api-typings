/// <reference types="../amap-js-api" />

declare namespace AMap {
  /**
   * https://lbs.amap.com/api/javascript-api/guide/abc/plugins
   * https://lbs.amap.com/api/javascript-api/reference/plugin
   */
  type PluginName =
    | 'AMap.ElasticMarker'
    | 'AMap.ToolBar'
    | 'AMap.Scale'
    | 'AMap.OverView'
    | 'AMap.MapType'
    | 'AMap.Geolocation'
    | 'AMap.AdvancedInfoWindow'
    | 'AMap.Autocomplete'
    | 'AMap.PlaceSearch'
    | 'AMap.PlaceSearchLayer'
    | 'AMap.DistrictSearch'
    | 'AMap.LineSearch'
    | 'AMap.StationSearch'
    | 'AMap.Driving'
    | 'AMap.TruckDriving'
    | 'AMap.Transfer'
    | 'AMap.Walking'
    | 'AMap.Riding'
    | 'AMap.DragRoute'
    | 'AMap.ArrivalRange'
    | 'AMap.Geocoder'
    | 'AMap.CitySearch'
    | 'AMap.IndoorMap'
    | 'AMap.MouseTool'
    | 'AMap.CircleEditor'
    | 'AMap.PolyEditor'
    | 'AMap.MarkerClusterer'
    | 'AMap.RangingTool'
    | 'AMap.CloudDataLayer'
    | 'AMap.CloudDataSearch'
    | 'AMap.Weather'
    | 'AMap.RoadInfoSearch'
    | 'AMap.Hotspot'
    | 'AMap.Heatmap'

  /**
   * 加载插件
   * @param pluginNames 插件名称
   * @param callback 插件加载完成后的回调函数
   */
  function plugin(
    pluginNames: PluginName | PluginName[],
    callback: () => void
  ): void

  /**
   * 加载服务
   * 服务可以脱离地图单独使用，兼容原有的通过 AMap.plugin 方法加载的方式
   * v1.3.5 (2014-12-18) 引入
   */
  const service: typeof plugin;
}
