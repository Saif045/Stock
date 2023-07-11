import { getAllStocks } from "@/actions/getStocks";
import ClientOnly from "@/components/ClientOnly";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";

export default async function Home() {
  const stocks = getAllStocks();

  return (
    <div className="relative bg-white w-full flex flex-col justify-center items-center ">
      <div className="mt-[96px] mb-16 w-full max-w-[1500px] px-[10px] xl:px-[80px]  flex flex-col  text-zinc-800 text-[32px] font-semibold leading-10">
        Markets
        <ClientOnly>
          <DataTable data={stocks} columns={columns} />
        </ClientOnly>
      </div>
    </div>
  );
}
