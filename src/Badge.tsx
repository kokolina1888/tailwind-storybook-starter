import classNames from "classnames";
import React, { FC } from "react";

type BadgeVariant = "gray" | "primary" | "error" | "warning" | "success";
type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  variant: BadgeVariant;
  size?: BadgeSize;
  children: string | React.ReactElement;
  className?: string;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
}

const BadgeVariantClasses: Record<BadgeVariant, string> = {
  gray: "badge-gray",
  primary: "badge-primary",
  error: "badge-error",
  warning: "badge-warning",
  success: "badge-success",
};

const BadgeSizeClasses: Record<BadgeSize, string> = {
  sm: "badge-sm",
  md: "badge-md",
  lg: "badge-lg",
};
const Badge: FC<BadgeProps> = ({
  variant,
  size = "md",
  LeadingIcon,
  TrailingIcon,
  className,
  children,
}) => {
  const BadgeVariantClassName = BadgeVariantClasses[variant];
  const BadgeSizeClassName = BadgeSizeClasses[size];

  return (
    <div
      className={classNames(
        "badge-base",
        BadgeVariantClassName,
        BadgeSizeClassName,
        className,
      )}
    >
      {LeadingIcon ? (
        <LeadingIcon.type
          {...LeadingIcon.props}
          className={classNames("mr-1.5", LeadingIcon.props.className)}
        />
      ) : null}
      {children}
      {TrailingIcon ? (
        <TrailingIcon.type
          {...TrailingIcon.props}
          className={classNames("ml-1.5", TrailingIcon.props.className)}
        />
      ) : null}
    </div>
  );
};

export default Badge;
