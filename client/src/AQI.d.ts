export interface AQIResponse {
    status: string;
    data: aqiData;
}

interface aqiData {
    station:string;
    aqi: string;
}