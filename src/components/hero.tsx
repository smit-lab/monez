import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import Statistics from "./statistics";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import TotalSend from "./total-send";
import Transactions from "./transactions";
import AiMonez from "./ai-monez";

const Hero = () => {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-10 xl:grid-rows-[repeat(2,auto)] gap-3">
      <div className="w-full col-span-1 md:col-start-1 xl:col-start-1 xl:row-start-1 xl:col-span-2 h-full">
        <CardOne />
      </div>
      <div className="w-full md:col-span-full md:row-start-2 md:row-end-3 xl:col-start-3 xl:row-start-1 xl:row-end-2 xl:col-span-5 h-full">
        <Statistics />
      </div>
      <div className="w-full md:col-span-full md:row-start-3 md:row-end-4 xl:row-start-1 xl:row-end-2 xl:col-span-3 h-full">
        <TotalSend />
      </div>

      <div className="w-full md:col-span-3 md:col-start-2 md:row-start-1 md:col-end-4 xl:row-start-2 xl:-row-end-1 xl:col-span-3 h-full">
        <AiMonez />
      </div>
      <div className="w-full md:col-span-full xl:row-start-2 xl:col-span-7 h-full">
        <Transactions />
      </div>
    </div>
  );
};

const CardOne = () => {
  return (
    <Card className="h-full grid">
      <div className="w-full">
        <CardHeader className="flex flex-row lg:justify-between items-center">
          <CardTitle className="font-medium tracking-normal mt-1.5">
            Balance
          </CardTitle>
          <CardDescription className="h-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="justify-center items-center flex bg-accent hover:bg-zinc-700 transition-colors rounded-lg w-8 h-8">
                <Ellipsis size={18} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-zinc-800 shadow-xl"
              >
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
        <CardContent className="lg:h-40">
          <p className="text-xs">
            <span className="px-2 tracking-tighter bg-emerald-400 text-primary-foreground rounded-full">
              CVV
            </span>
            &nbsp; ****&nbsp; 1842
          </p>
          <p className="text-3xl lg:text-4xl mt-5">$32,440.49</p>
        </CardContent>
      </div>

      <CardFooter className="place-content-end flex flex-col space-y-1 text-xs items-start text-zinc-400">
        <p>
          Available to spend: <span className="text-zinc-300">$124,040.00</span>
        </p>
        <p>
          Credit limit: <span className="text-zinc-300">$525,494.00</span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default Hero;
