import { FaSearchLocation } from "react-icons/fa";


export const Search = () => {

  return (

    <form id="locationSearchForm" method="post" className="flex flex-row bg-[#141635] rounded-lg px-4 py-4 items-center justify-between">
        <input type="text" placeholder="Enter your city" autoComplete="off" className="text-2xl bg-transparent border-none outline-none"/>
        <button className="cursor-pointer"><FaSearchLocation className="w-6 h-6 text-[#737373] hover:text-[#cccccc]"/></button> 
    </form>
  )
}
