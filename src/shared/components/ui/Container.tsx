import { FC, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface Props {
  className?: string;
  children: ReactNode;
}

export const Container: FC<Props> = ({ className, children }) => (
  <div className={cn("container", className)}>{children}</div>
);
