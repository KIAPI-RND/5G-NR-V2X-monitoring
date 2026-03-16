export function calculate_heading(lat1, lon1, lat2, lon2) {
  let lat1_rad = degreesToRadians(lat1)
  let lat2_rad = degreesToRadians(lat2)

  let delta_lon = degreesToRadians(lon2 - lon1)
  let x =
    Math.cos(lat1_rad) * Math.sin(lat2_rad) -
    Math.sin(lat1_rad) * Math.cos(lat2_rad) * Math.cos(delta_lon)
  let y = Math.sin(delta_lon) * Math.cos(lat2_rad)
  let heading_rad = Math.atan2(y, x)

  let heading_deg = radiansToDegrees(heading_rad)
  heading_deg = (heading_deg + 360) % 360

  return heading_deg
}

export function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180
}

export function radiansToDegrees(radian) {
  return (radian * 180) / Math.PI
}