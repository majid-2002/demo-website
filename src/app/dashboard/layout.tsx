import Image from "next/image";

export default function DashboarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-[#F7FAFF] flex flex-row">
      <div className="flex flex-col gap-y-6 w-20 p-3 pt-6 items-center bg-white">
        <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
        <div className="gap-y-5 flex items-center flex-col cursor-pointer">
          <Image
            src="/images/dashboard.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <Image src="/images/addtv.svg" alt="addtv" width={28} height={28} />
          <Image src="/images/label.svg" alt="logo" width={30} height={30} />
          <Image src="/images/doc.svg" alt="doc" width={30} height={30} />
          <Image src="/images/Vector.svg" alt="logo" width={28} height={28} />
          <Image
            src="/images/parceltracking.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <Image
            src="/images/localshipping.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <Image
            src="/images/businesscenter.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <Image
            src="/images/balance-wallet.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <Image
            src="/images/dynamic-feed.svg"
            alt="logo"
            width={30}
            height={30}
          />
          <Image src="/images/settings.svg" alt="logo" width={30} height={30} />
        </div>
      </div>
      <main className="w-full min-h-screen">{children}</main>
    </div>
  );
}
