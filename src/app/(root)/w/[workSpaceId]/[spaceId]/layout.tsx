import Navbar from "@/components/spaces/spaces-navbar";
import { spaces } from "@/consts/spaces";
export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { spaceId: 1 | 2 | 3 };
}) {
  const spaceDetails = spaces[params.spaceId];
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
