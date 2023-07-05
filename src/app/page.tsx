import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";
import { UserNav } from "@/components/table/user-nav";

export interface stock {
  icon: string;
  name: string;
  "52Wrange": [number, number];
  sentiment: string;
  change: [string, string];
  sell: string;
  buy: string;
}

export const stocks: stock[] = [
  {
    icon: "/stock-icons/hsb.jpg",
    name: "HSB",
    "52Wrange": [0.0, 116.85],
    sentiment: "100%",
    change: ["+11.2", "+1.32%"],
    sell: "29.34",
    buy: "30.01",
  },
  {
    icon: "/stock-icons/nsdq.jpg",
    name: "NSDQ100",
    "52Wrange": [10431.45, 16658.5],
    sentiment: "100%",
    change: ["-101.70", "-0.24%"],
    sell: "10981.00",
    buy: "10983.40",
  },
  {
    icon: "/stock-icons/tsla.jpg",
    name: "TSLA",
    "52Wrange": [145.66, 402.13],
    sentiment: "63%",
    change: ["-0.36", "-0.24%"],
    sell: "149.66",
    buy: "150.13",
  },
  {
    icon: "/stock-icons/ada.jpg",
    name: "ADA",
    "52Wrange": [0.25, 1.61],
    sentiment: "89%",
    change: ["+0.00072", "+0.28%"],
    sell: "0.25410",
    buy: "0.25960",
  },
  {
    icon: "/stock-icons/oil.jpg",
    name: "OIL",
    "52Wrange": [66.28, 126.72],
    sentiment: "63%",
    change: ["-0.70", "-0.92%"],
    sell: "75.18",
    buy: "75.23",
  },
  {
    icon: "/stock-icons/nio.jpg",
    name: "NIO",
    "52Wrange": [66.08, 126.72],
    sentiment: "89%",
    change: ["-0.54", "-4.66%"],
    sell: "11.4",
    buy: "11.6",
  },
  {
    icon: "/stock-icons/rrl.jpg",
    name: "RR.L",
    "52Wrange": [3490.42, 4816.93],
    sentiment: "34%",
    change: ["-26.50", "-0.69%"],
    sell: "3787.39",
    buy: "3788.14",
  },
  {
    icon: "/stock-icons/spx.jpg",
    name: "SPX500",
    "52Wrange": [870.17, 4114.37],
    sentiment: "63%",
    change: ["+1.1377", "+2.68%"],
    sell: "1193.88",
    buy: "1218.81",
  },
  {
    icon: "/stock-icons/gold.jpg",
    name: "GOLD",
    "52Wrange": [64.33, 129.48],
    sentiment: "100%",
    change: ["+1.20", "+1.37%"],
    sell: "88.61",
    buy: "88.90",
  },
  {
    icon: "/stock-icons/natgas.jpg",
    name: "NATGAS",
    "52Wrange": [3.53, 9.96],
    sentiment: "88%",
    change: ["-0.193", "-3.89%"],
    sell: "1795.01",
    buy: "179546",
  },
  {
    icon: "/stock-icons/spx.jpg",
    name: "SPX500",
    "52Wrange": [870.17, 4114.37],
    sentiment: "63%",
    change: ["+1.1377", "+2.68%"],
    sell: "1193.88",
    buy: "1218.81",
  },
  {
    icon: "/stock-icons/nio.jpg",
    name: "NIO",
    "52Wrange": [66.08, 126.72],
    sentiment: "89%",
    change: ["-0.54", "-4.66%"],
    sell: "11.4",
    buy: "11.6",
  },
  {
    icon: "/stock-icons/ada.jpg",
    name: "ADA",
    "52Wrange": [0.25, 1.61],
    sentiment: "89%",
    change: ["+0.00072", "+0.28%"],
    sell: "0.25410",
    buy: "0.25960",
  },
  {
    icon: "/stock-icons/hsb.jpg",
    name: "HSB",
    "52Wrange": [0.0, 116.85],
    sentiment: "100%",
    change: ["+11.2", "+1.32%"],
    sell: "29.34",
    buy: "30.01",
  },
  {
    icon: "/stock-icons/oil.jpg",
    name: "OIL",
    "52Wrange": [66.28, 126.72],
    sentiment: "63%",
    change: ["-0.70", "-0.92%"],
    sell: "75.18",
    buy: "75.23",
  },
  {
    icon: "/stock-icons/rrl.jpg",
    name: "RR.L",
    "52Wrange": [3490.42, 4816.93],
    sentiment: "34%",
    change: ["-26.50", "-0.69%"],
    sell: "3787.39",
    buy: "3788.14",
  },
];

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
