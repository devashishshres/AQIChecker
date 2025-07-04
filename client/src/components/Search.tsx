import { FaSearchLocation } from "react-icons/fa";

interface SearchProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const Search = ({ city, setCity, handleSubmit }: SearchProps) => {

  return (

    <form id="locationSearchForm" method="post" className="flex flex-row bg-[#141635] rounded-lg px-4 py-4 items-center justify-between" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your city" autoComplete="off" className="text-2xl bg-transparent border-none outline-none" value={city} onChange={e => setCity(e.target.value)}/>
        <button className="cursor-pointer" type="submit"><FaSearchLocation className="w-6 h-6 text-[#737373] hover:text-[#cccccc]"/></button> 
    </form>
  )
}
