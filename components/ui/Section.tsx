import { ReactNode } from "react";
import {cn} from "@/lib/utils";
interface SectionProps{
  children :ReactNode;
  id?:string;
  className?:string;
}
export default function Section({
  children,
  id,
  className,

}:SectionProps ){
  return (
         <section
      id={id}
      className={cn("py-24", className)}
    >
      {children}
    </section>
  );

}