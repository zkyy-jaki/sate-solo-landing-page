import {cn} from "@/lib/utils";

interface SectionTitleProps{
  eyebrow?: string ; 
  title : string ;
  description?:string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-secondary">
          {eyebrow}
        </p>
      )}

      <h2 className="font-heading text-3xl font-semibold leading-tight text-text sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}