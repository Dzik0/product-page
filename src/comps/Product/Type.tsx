import type { ReactNode } from "react";

interface TypeProps {
  children: ReactNode;
}

export default function Type({ children }: TypeProps) {
  return (
    <h2 className="text-my-dark-grayish-blue text-xs font-semibold tracking-widest uppercase lg:text-sm">
      {children}
    </h2>
  );
}
