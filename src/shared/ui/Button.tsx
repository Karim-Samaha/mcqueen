import * as React from "react";

type ButtonVariant =
  | "primary"
  | "primaryOutline"
  | "primaryLink"
  | "primaryPale"
  | "secondary"
  | "secondaryPale"
  | "warning"
  | "danger"
  | "ghost"
  | "dangerPale"
  | "success";

type ButtonSize = "lg" | "sm" | "iconLg" | "iconSm" | "iconXs";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  loaderFallback?: React.ReactNode;
  asChild?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-[#2C7BF4] text-white hover:bg-primary-1000/90 disabled:bg-primary-200 font-bold ",
  primaryOutline: "bg-transparent border border-[#2C7BF4] text-primary-900 hover:opacity-80",
  primaryLink: "bg-transparent text-[#2C7BF4] hover:opacity-80 disabled:text-primary-200",
  primaryPale:
    "bg-[#E7F0FF] hover:bg-border text-[#646E7D] disabled:border-primary-50 font-[600]",
  secondary: "bg-[#F9FBFF] dark:bg-transparent border border-[#DDE0F0] text-gray-600 text-primary-900 hover:opacity-80 font-[500]",
  secondaryPale: "",
  warning: "",
  danger: "",
  ghost: "",
  dangerPale: "",
  success: "",
};

const sizeClasses: Record<ButtonSize, string> = {
  lg: "h-[48px] px-[18px]",
  sm: "h-[40px] px-[12px]",
  iconLg: "w-[48px] h-[48px] rounded-[16px]",
  iconSm: "w-[40px] h-[40px] rounded-xl",
  iconXs: "w-[32px] h-[32px] rounded-lg",
};

// Simple className merge helper
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "lg", isLoading, loaderFallback, className, asChild, children, ...props },
    ref
  ) => {
    const Comp = asChild ? "span" : "button"; // simple asChild support
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex rounded-[12px] cursor-pointer items-center justify-center gap-2 text-sm transition-colors focus:outline-none focus:ring-1 disabled:pointer-events-none disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {isLoading ? loaderFallback || "Loading..." : children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
