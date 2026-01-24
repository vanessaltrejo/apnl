import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}
