import clsx from "clsx";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6 | "none";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "inherit";
  color?: "muted" | "rich" | "primary" | "inherit" | "white" | "black";
  hasMarginBottom?: boolean;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

// Component Variant Styles
const componentVariants = {
  base: "block font-bold font-sans",
  size: {
    xs: "text-base",
    sm: "text-xl lg:text-2xl",
    md: "text-2xl sm:text-3xl lg:text-5xl",
    lg: "text-3xl sm:text-4xl lg:text-6xl",
    xl: "text-4xl sm:text-6xl lg:text-7xl",
    "2xl": "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
    inherit: "",
  },
  color: {
    inherit: "",
    rich: "text-gray-900",
    muted: "text-gray-500",
    primary: "text-primary",
    // primary:
    //   "bg-clip-text bg-gradient-to-tr from-primary-700 to-secondary-400 text-transparent",
    white: "text-white",
    black: "text-gray-900",
  },
  marginBottom: "mb-[0.65em]",
};

export default function Heading({
  level = 2,
  size = "md",
  color = "rich",
  hasMarginBottom = false,
  className = "",
  children,
  ...rest
}: HeadingProps) {
  // Resolve the correct HTML AsElement
  let AsElement = `h${level}` as keyof JSX.IntrinsicElements;
  if (level === "none") AsElement = "span";
  return (
    <AsElement
      className={clsx(
        componentVariants.base,
        componentVariants.size[size],
        componentVariants.color[color],
        hasMarginBottom && componentVariants.marginBottom,
        className
      )}
      {...rest}
    >
      {children}
    </AsElement>
  );
}
