import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset ">
        <Image
          src="/icons/image.png"
          alt="auth image"
          height={1200}
          width={700}
          className=" ml-4 rounded-lg "
        />
      </div>
    </main>
  );
}
