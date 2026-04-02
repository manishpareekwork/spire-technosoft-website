"use client";

type LogoMarqueeItem = {
  name: string;
  tagline: string;
};

type LogoMarqueeProps = {
  items: readonly LogoMarqueeItem[];
};

export function LogoMarquee({ items }: LogoMarqueeProps) {
  const marqueeItems = [...items, ...items];

  return (
    <div className="logo-marquee relative overflow-hidden rounded-full border border-white/10 bg-white/[0.06] py-3">
      <div className="logo-marquee-track flex min-w-max items-center gap-4 px-5">
        {marqueeItems.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-white/72 backdrop-blur"
          >
            <span className="font-semibold text-white/90">{item.name}</span>
            <span className="text-slate-300">{item.tagline}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
