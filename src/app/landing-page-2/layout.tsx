import { Inter, Instrument_Serif } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export default function LandingPage2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} ${instrumentSerif.variable} mindloop min-h-screen bg-background text-foreground font-sans`}>
      <style dangerouslySetInnerHTML={{ __html: `
        .mindloop {
          font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
        }
        .mindloop .font-serif {
          font-family: var(--font-instrument-serif), serif;
        }
      `}} />
      {children}
    </div>
  );
}
