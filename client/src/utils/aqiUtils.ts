export function getAQIColorAndLabel(aqi: number): { color: string; label: string; } {
  if (aqi <= 50) return { color: "#6bcB6b", label: "Good" };
  if (aqi <= 100) return { color: "#d2d92b", label: "Moderate" };
  if (aqi <= 150) return { color: "#ff9933", label: "Unhealthy for Sensitive" };
  if (aqi <= 200) return { color: "#ff5050", label: "Unhealthy" };
  if (aqi <= 300) return { color: "#b366b3", label: "Very Unhealthy" };
  if (aqi <= 500) return { color: "#7e0023", label: "Hazardous" };
  return {color:"000000", label:"Could not fetch"};
  
}

export function getAQITip(aqi: number): string {
  if (aqi <= 50) return "Great time for outdoor activity.";
  if (aqi <= 100) return "Sensitive individuals should limit prolonged outdoor exertion.";
  if (aqi <= 150) return "Limit outdoor activities if you have respiratory issues.";
  if (aqi <= 200) return "Avoid outdoor exercise; wear a mask if you go out.";
  if (aqi <= 300) return "Stay indoors with air filtration.";
  return "Health alert: everyone should avoid outdoor exertion.";
}