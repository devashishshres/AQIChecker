export interface AQIResponse {
    status: string;
    data: stationData[];
}

interface stationData {
    uid: number;
    aqi: string;
    time: AQITime;
    station: AQIStation;
}

interface AQITime {
    tz: string;
    stime: string;
    vtime: number;
}

interface AQIStation {
    name: string;
    geo: [number, number];
    url: string;
    country: string;
}