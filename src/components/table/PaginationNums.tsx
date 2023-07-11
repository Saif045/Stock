"use client";

import React from "react";
import { Table } from "@tanstack/react-table";

interface PaginationNumsProps<TData> {
  table: Table<TData>;
}

export function PaginationNums<TData>({ table }: PaginationNumsProps<TData>) {
  const currentPageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  const maxVisiblePages = 6;

  let startPageIndex = 0;
  let endPageIndex = Math.min(maxVisiblePages - 1, pageCount - 1);

  if (pageCount > maxVisiblePages) {
    if (currentPageIndex >= maxVisiblePages - 3) {
      startPageIndex = Math.max(
        currentPageIndex - Math.floor(maxVisiblePages / 2),
        0
      );
      endPageIndex = Math.min(
        startPageIndex + maxVisiblePages - 1,
        pageCount - 1
      );
    } else {
      endPageIndex = maxVisiblePages - 2;
    }
  }

  const visiblePageIndices = [...Array(endPageIndex - startPageIndex + 1)].map(
    (_, index) => startPageIndex + index
  );

  return (
    <>
      {visiblePageIndices.map((pageIndex) => {
        return (
          <button
            key={pageIndex}
            onClick={() => table.setPageIndex(pageIndex)}
            className={`Button text-white h-9 px-5 py-2 rounded-lg justify-center items-center gap-2 flex ${
              pageIndex === currentPageIndex
                ? " bg-emerald-600"
                : pageIndex === currentPageIndex + 1 ||
                  pageIndex === currentPageIndex - 1
                ? "bg-green-100"
                : ""
            }`}>
            <div
              style={{ color: pageIndex === currentPageIndex ? "white" : "" }}
              className={`Text text-zinc-800 text-[14px] font-semibold leading-tight `}>
              {pageIndex + 1}
            </div>
          </button>
        );
      })}
      {endPageIndex < pageCount - 1 && (
        <>
          {endPageIndex < pageCount - 2 && (
            <span className="mx-1 Text text-zinc-800 text-[14px] font-semibold leading-tight">
              ...
            </span>
          )}
          <button
            key={pageCount - 1}
            onClick={() => table.setPageIndex(pageCount - 1)}
            className={`Button h-9 px-5 py-2 rounded-lg justify-center items-center gap-2 flex ${
              pageCount - 1 === currentPageIndex
                ? "bg-emerald-600 text-white"
                : pageCount - 1 === currentPageIndex - 1
                ? "bg-green-100"
                : ""
            }`}>
            <div
              className={`Text text-zinc-800 text-[14px] font-semibold leading-tight ${
                pageCount - 1 === currentPageIndex ? "text-white" : ""
              }`}>
              {pageCount}
            </div>
          </button>
        </>
      )}
    </>
  );
}
