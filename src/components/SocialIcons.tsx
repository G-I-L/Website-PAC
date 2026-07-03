type IconProps = { size?: number };

export function InstagramIcon({ size = 18 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth={1.8}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="white" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <rect x="3" y="9" width="3.6" height="11.5" rx="0.6" />
      <circle cx="4.8" cy="4.8" r="2.1" />
      <path d="M10 9h3.4v1.8c.9-1.3 2.2-2.1 4-2.1 3 0 5 2 5 5.8v6h-3.6v-5.5c0-1.7-.6-2.8-2.1-2.8-1.2 0-1.9.8-2.2 1.5-.1.3-.15.7-.15 1.1v5.7H10V9z" />
    </svg>
  );
}

export function FacebookIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M14.5 8.5H16.8V5.3H14.5C11.9 5.3 10.3 6.9 10.3 9.6V12H7.7V15.6H10.3V22H14V15.6H16.6L17 12H14V10C14 9.2 14.2 8.5 14.5 8.5Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M9.5 8.5L16.5 12L9.5 15.5V8.5Z" />
    </svg>
  );
}
