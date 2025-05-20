import { SVGProps } from "react";

export default function TypeScriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect width="24" height="24" rx="2" fill="#3178C6" />
      <path
        d="M9 17V10H11V17H9ZM13 17V15.5H15.5C15.5 15 14.5 14.8 14.5 14C14.5 13.2 15.5 13 16 13C16.5 13 17 13.5 17 14.5C17 15.5 16 15.7 15 15.8H13Z"
        fill="white"
      />
    </svg>
  );
}
