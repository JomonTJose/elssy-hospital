import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "accent" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-800 focus-visible:outline-brand-700",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 focus-visible:outline-accent-500",
  outline:
    "border-2 border-brand-700 text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-700",
  ghost: "text-brand-700 hover:bg-brand-50 focus-visible:outline-brand-700",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
    external?: boolean;
  };

type ButtonAsButton = CommonProps & {
  to?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 whitespace-nowrap";

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className = "", icon } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("to" in props && props.to) {
    if (props.external) {
      return (
        <a href={props.to} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link to={props.to} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const { onClick, type = "button" } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
