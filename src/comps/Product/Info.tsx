import type { ReactNode } from "react";

interface InfoProps {
  children: ReactNode;
}

export default function Info({ children }: InfoProps) {
  return (
    <p className="text-my-dark-grayish-blue leading-6 lg:mt-10 lg:mb-5">
      {children}
    </p>
  );
}
