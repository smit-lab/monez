"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Ellipsis } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const chartData = [
  { month: "Jan", spend: 1000, paid: 2000 },
  { month: "Feb", spend: 2000, paid: 4000 },
  { month: "Mar", spend: 5000, paid: 2000 },
  { month: "Apr", spend: 1000, paid: 3000 },
  { month: "May", spend: 1500, paid: 2600 },
  { month: "Jun", spend: 1000, paid: 8000 },
  { month: "Jul", spend: 6000, paid: 4500 },
  { month: "Aug", spend: 500, paid: 2500 },
  { month: "Sep", spend: 4000, paid: 6000 },
  { month: "Oct", spend: 8000, paid: 2000 },
  { month: "Nov", spend: 1000, paid: 10000 },
  { month: "Dec", spend: 6000, paid: 3500 },
];

const chartConfig = {
  spend: {
    label: "Spend",
    color: "hsl(var(--chart-1))",
  },
  paid: {
    label: "Paid",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const Statistics = () => {
  return (
    <Card className="min-h-[300px] h-full">
      <CardHeader className="flex-row w-full items-center justify-between">
        <CardTitle className="font-medium tracking-normal mt-1.5">
          Statistics
        </CardTitle>
        <CardDescription className="flex flex-row items-center gap-1.5 h-8">
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

          <DropdownMenu>
            <DropdownMenuTrigger className="justify-center items-center flex bg-accent hover:bg-zinc-700 transition-colors rounded-lg w-8 h-8">
              <Ellipsis size={18} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-800 shadow-xl">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="focus:bg-zinc-700">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-zinc-700">
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-zinc-700">
                Team
              </DropdownMenuItem>
              <DropdownMenuItem className="focus:bg-zinc-700">
                Subscription
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <LineChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={"month"}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              type="number"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                const amount = value.toString();
                const convertToDollar = `$${(amount / 1000).toFixed(0)}k`;
                return convertToDollar;
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey={"spend"}
              type={"monotone"}
              stroke="var(--color-spend)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey={"paid"}
              type={"monotone"}
              stroke="var(--color-paid)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default Statistics;
