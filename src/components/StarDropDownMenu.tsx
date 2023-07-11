"use client"
import { stock } from "@/actions/getStocks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type StarDropDownMenuProps = {
  children: React.ReactNode;
  stocks: stock[] | undefined;
};

const StarDropDownMenu: React.FC<StarDropDownMenuProps> = ({
  children,
  stocks,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex w-[18px] h-[18px] data-[state=open]:bg-muted">
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {stocks?.map((stock, i) => (
          <DropdownMenuItem key={i}>
            <div className="flex items-center gap-1 max-w-[140px]">
              <Image src={stock.icon} alt={stock.name} height={24} width={24} />
              <span className=" truncate font-semibold text-base">
                {stock.name}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default StarDropDownMenu;
