"use client";

import { MoreHorizontal, Search } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import AdobeCC from "../../public/adobe-creative-cloud.svg";
import Uber from "../../public/uber.svg";
import Walmart from "../../public/walmart.svg";
import Figma from "../../public/figma.svg";

const data = [
  {
    image: AdobeCC,
    receiver: "Adobe CC",
    date: "2024-07-22",
    status: "completed",
    type: "Subscription",
    amount: 35,
  },
  {
    image: Uber,
    receiver: "Uber",
    date: "20204-07-24",
    status: "canceled",
    type: "Transport",
    amount: 48,
  },
  {
    image: Walmart,
    receiver: "Walmart",
    date: "2024-08-01",
    status: "completed",
    type: "Food",
    amount: 120,
  },
  {
    image: Figma,
    receiver: "Figma",
    date: "2024-08-02",
    status: "completed",
    type: "Subscription",
    amount: 120,
  },
];

const Transactions = () => {
  return (
    <Card className="grid h-full">
      <CardHeader className="flex-row justify-between items-center w-full">
        <CardTitle>Transactions</CardTitle>
        <CardDescription className="flex flex-row items-center gap-1.5 h-8">
          <Button size={"icon"} className="bg-accent h-8 w-8 hover:bg-zinc-700">
            <Search className="text-primary" size={16} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="justify-center items-center flex gap-1 bg-accent hover:bg-zinc-700 transition-colors h-8 rounded-lg px-3 text-xs">
              Last year
              <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-800 shadow-xl">
              <DropdownMenuItem className="focus:bg-zinc-700">
                Previous year
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-zinc-700">
                Last 3 years
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Receiver</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Type</TableHead>
              <TableHead className="hidden md:table-cell">Amount</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d, i) => (
              <TableRow key={i}>
                <TableCell className="flex items-center gap-4 font-medium ">
                  <div className="border border-zinc-700/50 p-3 bg-zinc-800 rounded-full w-11 h-11 flex items-center justify-center">
                    <Image
                      alt="Product image"
                      className="w-fit h-fit object-contain"
                      src={d.image}
                    />
                  </div>
                  {d.receiver}
                </TableCell>
                <TableCell className="hidden md:table-cell ">
                  {new Date(d.date).toDateString()}
                </TableCell>
                <TableCell>
                  <Badge
                    className="border-zinc-600 rounded-full py-1 capitalize bg-zinc-800/40"
                    variant="outline"
                  >
                    <div
                      className={cn(
                        "w-1.5 h-1.5 mr-1.5 rounded-full aspect-square",
                        {
                          "bg-green-400": d.status === "completed",
                          "bg-red-400": d.status === "canceled",
                        }
                      )}
                    ></div>
                    {d.status}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">{d.type}</TableCell>
                <TableCell>-${d.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      {/* <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter> */}
    </Card>
  );
};

export default Transactions;
