import { cn } from "@/lib/utils";
import styled from "styled-components";
import GridPattern from "./ui/GridPattern";

const Title = styled.h1`
    // font-size: 2.25rem;
    font-weight: 600;
    text-align: center;
    width: 100%;
    @media (max-width: 768px) {
        font-size: 1.75rem;
    }
`;

export function GridSection({ children }) {
  return (
    <div className="border-box relative flex flex-col gap-24 size-full items-center justify-center overflow-hidden rounded-lg pt-20 pb-20 md:shadow-xl">
      {/* <Title>Revolutionize your practice today</Title> */}
      <div className="text-3xl sm:text-3xl lg:text-4xl text-center font-semibold w-full ">Revolutionize your practice today</div>
      {children}

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
}
