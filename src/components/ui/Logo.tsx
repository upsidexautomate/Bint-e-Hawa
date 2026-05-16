type LogoProps = {
  wrapperClassName?: string;
  imgClassName?: string;
  showText?: boolean;
  alt?: string;
  white?: boolean;
};

export default function Logo({
  wrapperClassName = "flex items-center gap-3",
  imgClassName = "w-8 h-8",
  showText = false,
  alt = "Bint-e-Hawa logo",
  white = false,
}: LogoProps) {
  return (
    <div className={wrapperClassName}>
      <img
        src="/logo.svg"
        alt={alt}
        className={`${imgClassName} object-contain ${white ? "brightness-0 invert" : ""}`}
      />
      {showText && (
        <span className="text-lg font-display font-light tracking-[0.1em] text-brand-text uppercase italic">
          Bint-e-Hawa
        </span>
      )}
    </div>
  );
}
