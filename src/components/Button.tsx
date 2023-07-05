export enum ButtonType {
  BLUE = "button-blue",
  DOWNLOAD = "button-dowload",
}

export function Button({
  type,
  children,
  className,
}: {
  type: ButtonType;
  children: React.ReactNode;
  className?: string;
}) {
  return <button className={`${type} ${className}`}>{children}</button>;
}
