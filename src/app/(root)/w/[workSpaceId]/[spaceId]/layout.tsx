import Navbar from "@/components/spaces/spaces-navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4">
      <Navbar />
      {children}
    </div>
  );
}
