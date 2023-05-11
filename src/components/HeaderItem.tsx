import { HeaderTitleProps } from "@/@types";

 const HeaderItem = ({ title, subtitle }: HeaderTitleProps) => {
   return (
     <div className="bg-emerald-600 flex justify-center md:justify-between py-2 px-4 rounded-md shadow-xl text-white items-center mb-4">
       <h1 className="text-lg font-bold">{title}</h1>
       {subtitle && <h2 className="hidden md:block text-sm">{subtitle}</h2>}
     </div>
   );
 };
 
 export default HeaderItem; 