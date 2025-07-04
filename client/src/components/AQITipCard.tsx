import { getAQITip } from "../utils/aqiUtils";

export const AQITipCard = ({ aqi }: { aqi: number }) => {
  return (
    <div className="mt-20 bg-[#3B3873] rounded-xl p-4 text-center text-2xl text-white shadow-lg max-w-sm mx-auto">
      {getAQITip(aqi)}
    </div>
  );
}