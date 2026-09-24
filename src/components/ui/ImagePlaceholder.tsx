type ImagePlaceholderProps = {
  label?: string;
  ratio?: "16:10" | "16:9" | "4:3" | "3:4" | "1:1";
  variant?: "human" | "education" | "event" | "story";
};

const ratioClass: Record<NonNullable<ImagePlaceholderProps["ratio"]>, string> = {
  "16:10": "placeholder--16-10",
  "16:9": "placeholder--16-9",
  "4:3": "placeholder--4-3",
  "3:4": "placeholder--3-4",
  "1:1": "placeholder--1-1",
};

const variantClass: Record<NonNullable<ImagePlaceholderProps["variant"]>, string> = {
  human: "placeholder--human",
  education: "placeholder--education",
  event: "placeholder--event",
  story: "placeholder--story",
};

export function ImagePlaceholder({ label = "Foto", ratio = "16:10", variant = "human" }: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder ${ratioClass[ratio]} ${variantClass[variant]}`} aria-hidden="true">
      <span className="image-placeholder__label">{label}</span>
    </div>
  );
}
