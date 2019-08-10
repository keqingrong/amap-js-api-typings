// $ExpectType void
AMap.plugin(['AMap.DistrictSearch', 'AMap.Geocoder'], () => {
  const geocoder = new AMap.Geocoder({
    city: '全国',
    radius: 1000,
    batch: false,
    extensions: 'base'
  })

  // 坐标 -> 地址
  const lnglat: [number, number] = [118.798409, 32.048994]
  geocoder.getAddress(lnglat, (status, result) => {
    if (
      status === 'complete' &&
      typeof result !== 'string' &&
      result.info === 'OK'
    ) {
      // result为对应的地理位置详细信息
      console.log(result.regeocode.formattedAddress)
    } else {
      console.error('根据地址查询位置失败')
    }
  })

  // 地址 -> 坐标
  const address = '北京市朝阳区阜荣街10号'
  geocoder.getLocation(address, (status, result) => {
    if (
      status === 'complete' &&
      typeof result !== 'string' &&
      result.geocodes.length > 0
    ) {
      const lnglat = result.geocodes[0].location
      console.log([lnglat.getLng(), lnglat.getLat()])
    } else {
      console.error('根据地址查询位置失败')
    }
  })

  // 创建行政区查询对象
  const district = new AMap.DistrictSearch({
    level: 'district',
    showbiz: false,
    extensions: 'all',
    subdistrict: 1
  })

  district.search('玄武区', (status, result) => {
    if (status === 'complete' &&
      typeof result !== 'string' &&
      result.districtList.length > 0
    ) {
      // 获取边界信息
      const bounds = result.districtList[0].boundaries
      const point: [number, number] = [118.798409, 32.048994]
      const isPointInRing = AMap.GeometryUtil.isPointInRing(
        point,
        bounds
      )
      console.log(result)
      console.log(isPointInRing)
    }
  })
})
