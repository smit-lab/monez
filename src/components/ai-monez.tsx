"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AiMonez = () => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="h-fit auto-rows-max">
        <CardTitle className="font-medium tracking-normal mt-1.5">
          AI Monez
        </CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <Carousel className="flex h-full w-full" orientation="horizontal">
          <CarouselContent className="h-full w-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="h-full w-full">
                <Card className="h-full bg-background">
                  <CardContent className="flex flex-col justify-between h-full p-5">
                    <p className="text-xl mt-4 flex flex-col font-light select-none">
                      Find out how
                      <span className="text-sm text-muted-foreground">
                        Your friends have AI
                      </span>
                    </p>

                    <div className="flex -space-x-3">
                      <Avatar className="h-14 w-14 border-[3px] border-background">
                        <AvatarImage src="/emily-witherspoon.png" />
                        <AvatarFallback>EW</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-14 w-14 border-[3px] border-background">
                        <AvatarImage src="/joey-tribiani.png" />
                        <AvatarFallback>JT</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-14 w-14 border-[3px] border-background">
                        <AvatarImage src="/rachel.png" />
                        <AvatarFallback>RA</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-14 w-14 border-[3px] border-background">
                        <AvatarFallback className="bg-accent select-none">
                          +12
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div>
            <CarouselNext className="w-10 h-full relative top-0 translate-y-0 right-0" />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
};

export default AiMonez;
