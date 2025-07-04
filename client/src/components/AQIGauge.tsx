import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface AQIGaugeProps {
    value: number;
    text: string;
    color: string;
}

export const AQIGauge = ({ value, text, color }: AQIGaugeProps) => {
    return (
        <div className="flex flex-col items-center justify-center w-full mt-8 gap-14">
            <div className="w-68 h-30 mb-2 bg-transparent">
                <CircularProgressbar
                value={value}
                maxValue={500}
                text={`${value}`}
                circleRatio={0.5}
                styles={buildStyles({
                    rotation: 0.75,
                    strokeLinecap: "round",
                    trailColor: "#3B3873",
                    pathColor: color,
                    textColor: "#fff",
                    textSize: '2.5rem',
                })}
                />
            </div>

            <span className="mt-2 text-4xl font-semibold text-white drop-shadow">{text}</span>
    </div>
    )
}