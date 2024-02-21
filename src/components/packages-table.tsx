"use client";

import { pricingPackages } from "@/config";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Pencil, Trash2 } from "lucide-react";
import { PricingPackageForm } from "./pricing-package-form";

export function PricingTable() {
  return (
    <section>
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Pricing Packages
        </h2>
        <PricingPackageForm />
      </div>
      <Table
        hideHeader
        aria-label="Example static collection table"
        classNames={{
          th: "text-base",
          td: "text-base",
        }}
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {pricingPackages.map(({ _id, name, description }) => (
            <TableRow key={_id}>
              <TableCell className="">
                <h4 className="font-medium">{name}</h4>
                <p className="text-foreground/80">{description}</p>
              </TableCell>
              <TableCell className="relative flex items-center gap-4">
                <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                  <Pencil />
                </span>
                <span className="cursor-pointer text-lg text-danger active:opacity-50">
                  <Trash2 />
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
