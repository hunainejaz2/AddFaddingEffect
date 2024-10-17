import { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";
import { forwardRef } from "react";
import {
  InitializedMDXEditor,
  InitializedMDXViewer,
} from "./InitializedMDXEditor.js";
export const Mdxeditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <InitializedMDXEditor {...props} editorRef={ref} />
);
Mdxeditor.displayName = "ForwardRefEditor";

export const MdxViewer = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <InitializedMDXViewer {...props} editorRef={ref} />
);
MdxViewer.displayName = "ForwardRefEditor";
