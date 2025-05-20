import { SVGProps } from "react";

export default function ReactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
      <path
        d="M12 2C9 2 6 12 12 12C18 12 15 2 12 2ZM12 22C15 22 18 12 12 12C6 12 9 22 12 22ZM2 12C2 9 12 6 12 12C12 18 2 15 2 12ZM22 12C22 15 12 18 12 12C12 6 22 9 22 12Z"
        stroke="#61DAFB"
        strokeWidth="1.5"
      />
    </svg>
  );
}
