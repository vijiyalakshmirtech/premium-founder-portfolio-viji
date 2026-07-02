import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div
      style={{
        width: "92%",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}