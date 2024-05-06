import Image from "next/image";
import { Providers } from "../../../Providers/provider";
import Link from "next/link";

/**
 * Dashboard layout component
 * @description This is the main layout component for the dashboard
 * @param {React.ReactNode} children - The children to render
 * @returns {JSX.Element} JSX representation of the dashboard layout
 */
export default function DashboarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //? Icons for the sidebar
  const iconsLinks = [
    "/images/dashboard.svg",
    "/images/addtv.svg",
    "/images/label.svg",
    "/images/doc.svg",
    "/images/Vector.svg",
    "/images/parceltracking.svg",
    "/images/localshipping.svg",
    "/images/businesscenter.svg",
    "/images/balance-wallet.svg",
    "/images/dynamic-feed.svg",
    "/images/settings.svg",
  ];

  return (
    <Providers>
      <div className="min-h-screen bg-[#F7FAFF] flex flex-row">
        <div className="flex flex-col gap-y-6 w-20 p-3 pt-6 items-center fixed h-screen bg-white">
          <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
          <div className="gap-y-5 flex items-center flex-col ">
            {iconsLinks.map((icon, index) => (
              <Link href="/dashboard" key={index}>
                <Image
                  src={icon}
                  width={35}
                  height={35}
                  alt={icon.split("/")[2]}
                  className="cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
        <main className="w-full pl-20  min-h-screen">{children}</main>
      </div>
    </Providers>
  );
}
