"use client";
import dynamic from "next/dynamic";
import "@repo/ui/css";
const Mdxviewer = dynamic(
  () => import("@repo/ui").then((mod) => mod.MdxViewer),
  { ssr: false }
);

function MdxviewerComponent({
  content,
  ClassName,
}: {
  content: string;
  ClassName?: string;
}) {
  return (
    <div className={ClassName}>
      <Mdxviewer
        markdown={content}
        className="prose max-w-none "
        readOnly={true}
      />
    </div>
  );
}

export default MdxviewerComponent;
