import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="text-3xl font-bold capitalize lg:text-4xl">{children}</h1>
  );
}
