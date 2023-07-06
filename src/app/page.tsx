import { stocks } from "@/actions/getStocks";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { UserNav } from "@/components/table/user-nav";

export default async function Home() {
  // await stock data

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-4 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your Stock!
          </p>
        </div>
      </div>
      <DataTable data={stocks} columns={columns} />
    </div>
  );
}
