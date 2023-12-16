import { ClerkProvider } from "@clerk/nextjs";
import { Roboto, Space_Grotesk } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weights: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata = {
  title: "GetFitness",
  description:
    "Achieve your fitness goals with Get Fitness! Explore structured bodybuilding workouts, detailed guides on proper exercise techniques, and valuable information on various workouts. Our expert advice will help you build muscle, burn fat, and optimize your fitness journey. Start your transformation today with Get Fitness!",
  icons: {
    icon: "/assets/images/get-fit-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${roboto.variable} `}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
