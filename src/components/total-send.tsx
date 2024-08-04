"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
import { Separator } from "./ui/separator";

const chartData = [
  { day: "Mon", send: 74, total: 100 },
  { day: "Tue", send: 20, total: 100 },
  { day: "Wed", send: 50, total: 100 },
  { day: "Thu", send: 26, total: 100 },
  { day: "Fri", send: 49, total: 100 },
  { day: "Sat", send: 60, total: 100 },
  { day: "Sun", send: 43, total: 100 },
];

const chartConfig = {
  day: {
    label: "Day",
    color: "hsl(var(--chart-1))",
  },
  send: {
    label: "Send",
    color: "hsl(var(--chart-1))",
  },
  total: {
    label: "Total",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

const ZebraSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <pattern
          id="zebraPattern"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect
            width="5"
            height="10"
            transform="translate(0,0)"
            fill="black"
          ></rect>
          <rect
            width="5"
            height="10"
            transform="translate(5,0)"
            fill="white"
          ></rect>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zebraPattern)" />
    </svg>
  );
};

const TotalSend = () => {
  return (
    <Card className="min-h-[240px] grid w-full">
      <div className="w-full">
        <CardHeader className="flex-row w-full items-center justify-between">
          <CardTitle className="font-medium tracking-normal mt-1.5">
            Send
          </CardTitle>
          <CardDescription className="h-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="justify-center items-center flex gap-1 bg-accent hover:bg-zinc-700 transition-colors h-8 rounded-lg px-3 text-xs">
                Last week
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-zinc-800 shadow-xl"
              >
                <DropdownMenuItem className="focus:bg-zinc-700">
                  Previous week
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-zinc-700">
                  Last 3 weeks
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="w-full h-full">
            <BarChart accessibilityLayer data={chartData}>
              <XAxis
                dataKey={"day"}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis dataKey={"total"} hide />
              <svg width={0} height={0}>
                <defs>
                  <pattern
                    id="zebraPattern"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(45)"
                  >
                    <rect width="10" height="10" fill="hsl(var(--muted))" />
                    <rect width="1" height="10" fill="#606060" />
                    <rect
                      width="1"
                      height="10"
                      transform="translate(5,0)"
                      fill="hsl(var(--muted))"
                    />
                  </pattern>
                </defs>
              </svg>

              <Bar
                dataKey={"send"}
                stackId={"a"}
                fill="var(--color-send)"
                radius={[8, 8, 0, 0]}
                background={{ fill: "url(#zebraPattern)", radius: 8 }}
              >
                <LabelList
                  dataKey={"send"}
                  position={"insideTop"}
                  offset={12}
                  fontSize={12}
                  className="fill-[--color-label] font-[450]"
                  formatter={(value: Number) => {
                    const sendPercent = value.toString();
                    const print = `${sendPercent}%`;
                    return print;
                  }}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </div>

      <CardFooter className="place-items-end h-fit gap-12 mt-6">
        <p className="text-4xl flex items-center gap-2">
          83{" "}
          <span className="text-xs text-muted-foreground">
            Cash <br /> reciepts
          </span>
        </p>
        <Separator orientation="vertical" className="h-6 w-0.5 bg-zinc-800" />
        <p className="text-4xl flex items-center gap-2">
          69{" "}
          <span className="text-xs text-muted-foreground">
            Cash <br /> expenses
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default TotalSend;
