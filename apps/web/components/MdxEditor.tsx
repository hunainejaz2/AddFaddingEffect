"use client";
import dynamic from "next/dynamic";
import "@repo/ui/css";
const Mdxeditor = dynamic(
  () => import("@repo/ui").then((mod) => mod.Mdxeditor),
  { ssr: false }
);

function MdxeditorComponent({
  ClassName,
  onChange,
}: {
  ClassName?: string;
  onChange: ({ content }: { content: string }) => void;
}) {
  return (
    <div className={ClassName}>
      <Mdxeditor
        markdown=""
        className="prose max-w-none"
        onChange={(e) => {
          onChange({ content: e });
        }}
      />
    </div>
  );
}

export default MdxeditorComponent;
