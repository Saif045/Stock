"use client";
import React, { useState, useEffect } from "react";
import Tabs from "./Tabs";
import { useLocalStorage } from "usehooks-ts";
import { getStockById, stock } from "@/actions/getStocks";
import StarDropDownMenu from "./StarDropDownMenu";
import { UserNav } from "./table/user-nav";
import HeaderButton from "./HeaderButton";

const Header: React.FC = () => {
  const [stars, setStars] = useLocalStorage("stars", {});

  const starIds = stars && Object.keys(stars);
  const starsLength = starIds?.length;
  const [stocks, setStocks] = useState<stock[] | undefined>([]);

  useEffect(() => {
    if (stars && starIds) {
      const fetchedStocks: stock[] = [];

      for (const id of starIds) {
        const stockId = Number(id);
        const foundStock = getStockById(stockId);

        if (foundStock) {
          fetchedStocks.push(foundStock);
        }
      }

      setStocks(fetchedStocks);
    }
  }, [stars]);

  return (
    <div className="inset-x-0 top-0 absolute w-full flex z-50 justify-center items-center">
      <div className="w-full max-w-[1500px] z-50 h-16 flex justify-between px-2 sm:pr-[8%] sm:pl-[4%] bg-white border border-gray-100">
        <div className="flex gap-20 items-center">
          <div className="text-black text-[14px] font-medium leading-tight">
            Logo
          </div>
          <div className="hidden lg:flex items-center">
            <Tabs tabs={["Home", "Portfolio", "Markets", "Community"]} />
          </div>
        </div>

        <div className="flex gap-12">
          {/*icons */}
          <div className="Buttons hidden justify-center items-center gap-2 sm:inline-flex">
            <HeaderButton icon={"magnifying-glass"} />
            <HeaderButton icon={"bell"} />
              <StarDropDownMenu stocks={stocks}>
                <HeaderButton icon={"star"} count={starsLength} />
              </StarDropDownMenu>
          </div>

          <div className="justify-start items-center gap-0.5 inline-flex">
            {/*<UserGreeting /> */}
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
