import Side from "@/components/side";
import ContentCard from "@/components/sections/contentcard";

export default async function mainlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-b flex p-3 gap-3 h-screen drop-shadow-lg">
      <aside className="max-h-screen max-md:hidden flex justify-between">
        <Side />
      </aside>
      <ContentCard>{children}</ContentCard>
    </div>
  );
}
