"use client";
import { ChevronDown } from "lucide-react";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Table } from "@tanstack/react-table";

interface FilterSelectProps<TData> {
  label: string;
  options?: string;
  table?: Table<TData>;
}

export function FilterSelect<TData>({
  table,
  label,
  options,
}: FilterSelectProps<TData>) {
  return (
    <div className="flex ">
      <Select
        value={`${table?.getState().pagination.pageSize}`}
        onValueChange={(value) => {
          table?.setPageSize(Number(value));
        }}>
        <SelectTrigger className=" flex flex-row gap-2">
          <div className=" flex flex-col items-start  text-zinc-800 text-[14px] font-normal leading-tight">
            <p className="Text self-stretch text-gray-400 text-[10px] font-semibold leading-none">
              {label}
            </p>
            {table ? (
              <SelectValue
                placeholder={table?.getState().pagination.pageSize || 0}
              />
            ) : (
              options
            )}
          </div>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectTrigger>
        <SelectContent side="top">
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default FilterSelect;
