"use client";
import dynamic from "next/dynamic";
import "@repo/ui/css";
const Mdxeditor = dynamic(
  () => import("@repo/ui").then((mod) => mod.Mdxeditor),
  { ssr: false }
);

function MdxeditorComponent() {
  return (
    <div className="">
      <Mdxeditor markdown="" className="prose max-w-none bg-slate-200" />
    </div>
  );
}

export default MdxeditorComponent;
