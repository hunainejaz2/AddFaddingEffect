import { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";
import { forwardRef } from "react";
import InitializedMDXEditor from "./InitializedMDXEditor.js";
// This is what is imported by other components. Pre-initialized with plugins, and ready
// to accept other props, including a ref.
export const Mdxeditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <InitializedMDXEditor {...props} editorRef={ref} />
);

// TS complains without the following line
Mdxeditor.displayName = "ForwardRefEditor";
