import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import type { AQIResponse, aqiData } from './AQI';
import { AQIGauge } from './components/AQIGauge';
import { getAQIColorAndLabel } from './utils/AQIUtils';
import { AQITipCard } from './components/AQITipCard';


function App() {
  const [city, setCity] = useState("");
  const [apiData, setApiData] = useState<aqiData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const fetchAqiData = async(city: string): Promise<AQIResponse> => {
    const response = await fetch(`/api/search?keyword=${encodeURIComponent(city)}`)
    
    if (!response.ok) throw new Error("Failed to fetch!");
    return response.json();
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted!")
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await fetchAqiData(city);
      setApiData(data.data);
    } catch (error) {
      setError("Could not fetch API data! Error: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <div className='flex flex-col items-center max-h-screen gap-14'>
        <h1 className='mt-12 text-5xl font-semibold'>AirAware</h1>
        <Search city={city} setCity={setCity} handleSubmit={handleSubmit}/>

        {loading && <div className='text-lg'>Loading</div>}

        {error && <div className='text-lg bg-red-600'>Error</div>}

        {apiData && (
          <div>
            <AQIGauge value={Number(apiData.aqi)} text={getAQIColorAndLabel(Number(apiData.aqi)).label} color={getAQIColorAndLabel(Number(apiData.aqi)).color}/>
            <AQITipCard aqi={Number(apiData.aqi)}/>
          </div>
        )}
      </div>
    </main>
  )
}

export default App

