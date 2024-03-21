import { Metadata } from "next";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { fetchOneOrganization } from "@/serverActions/fetchOneOrganizatios";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const org = await fetchOneOrganization(params.id);

  if (org === 404) notFound();
  if (!org) throw new Error("Unable to connect, try again");
  const { name, compScore, quota, rating, category, location } = org.stats;
  return {
    title: "Accessibility Compliance Dashboard | " + name,
    description: `Located at ${location}. ${category}. Compliance Score: ${compScore}. 5% Employment Quota: ${quota}. Accessibility Rating: ${rating}.`
  };
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex items-stretch">
      <div className="w-64 max-lg:hidden" />
      <Sidebar />
      <div className="w-full lg:max-w-[calc(100vw-16rem)] overflow-x-auto flex flex-col bg-light-gray min-h-screen">
        <Topbar />
        {children}
      </div>
    </section>
  );
}