import React from "react";
interface TabsProps {
  tabs: string[];
}
const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <>
      {tabs?.map((tab, index) => {
        const market = tab == "Markets";
        const asset = tab == "Assets";
        return (
          <div
            key={index}
            className="px-2 pt-3 pb-5 relative justify-center  items-start gap-4 inline-flex">
            <div
              className={`Text   text-[14px] font-medium leading-tight ${
                market || asset ? "text-zinc-800 " : "text-[#6A7381]"
              }`}>
              {tab}
            </div>
            {market && (
              <div className=" w-full  absolute inset-x-0 bottom-1 z-50 h-0.5 bg-emerald-600" />
            )}
            {asset && (
              <div className=" absolute inset-x-0 bottom-1 z-50 h-0.5 bg-emerald-600" />
            )}
          </div>
        );
      })}
    </>
  );
};

export default Tabs;

{
  /*;*/
}
