import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Halo | Your Wealth Works",
  description: "An automated, reward-powered digital dollar built for native passive earnings.",
};

export default function LandingPage3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.className} bg-[#F5F5F5] min-h-screen`}>
      {children}
    </div>
  );
}
