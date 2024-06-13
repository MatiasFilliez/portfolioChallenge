import { cn } from "../../../lib/utils"
import Image from "next/image"

interface CardType {
  title:string,
  description:string,
  img:string,
  tecnologias:string[]
}

export const Card: React.FC<CardType> = ({ title, description,img,tecnologias }) => {
  return (
    <div className="max-w-lg rounded overflow-hidden shadow-lg bg-white rounded hover:scale-110 cursor-pointer transition duration-500 ease-in-out hover:shadow-md">
  <img className="w-full" src={img} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base text-justify">
     {description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    {tecnologias.map(tecnology =>(

      <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tecnology}</span>
    
      )
    )}
  </div>
</div>
  );
};