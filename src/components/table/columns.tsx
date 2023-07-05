"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import { priorities, statuses } from "./data";
import { stock } from "@/app/page";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import WeekChart from "../charts/WeekChart-52";

export const columns: ColumnDef<stock>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Asset" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1 max-w-[140px]">
          <Image
            src={row.original.icon}
            alt={row.original.name}
            height={24}
            width={24}
          />
          <span className=" truncate font-semibold text-base">
            {row.original.name}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "52Wrange",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="52W Range" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex min-w-[120px] flex-col items-center ">
          <div className="flex w-full items-center justify-between">
            <span>{row.original["52Wrange"][0]}</span>

            <span>{row.original["52Wrange"][1]}</span>
          </div>

          <WeekChart
            start={row.original["52Wrange"][0]}
            end={row.original["52Wrange"][1]}
          />
        </div>
      );
    },
    filterFn: (row, name, value) => {
      return value.includes(row.getValue(name));
    },
  },
  {
    accessorKey: "sentiment",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sentiment" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex  items-center">
          <span className="font-semibold mr-1">{row.original.sentiment} </span>{" "}
          buying
        </div>
      );
    },
    filterFn: (row, value) => {
      return value.includes(row.original.sentiment);
    },
  },
  {
    accessorKey: "change",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Change" />
    ),
    cell: ({ row }) => {
      const color = Number(row.original.change[0]) > 0 ? "#069D6E" : "#EA1717";
      return (
        <div className="flex flex-col   ">
          <span className="font-bold">{row.original.change[0]}</span>
          <span className="font-bold" style={{ color: color }}>
            {row.original.change[1]}
          </span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "sell",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sell" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-fit items-center justify-center">
          <span className="font-semibold">{row.original.sell}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "buy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Buy" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-fit items-center justify-center">
          <span className="font-semibold">{row.original.buy}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex w-full  gap-1">
          <Button name={row.original.name} label="Sell" color="#B91C1C" />
          <Button name={row.original.name} label="Buy" color="#069D6E" />
          <DataTableRowActions row={row} />
        </div>
      );
    },
  },
];
