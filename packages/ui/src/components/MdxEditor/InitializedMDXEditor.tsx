import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  ListsToggle,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  toolbarPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
  UndoRedo,
  BoldItalicUnderlineToggles,
  BlockTypeSelect,
  directivesPlugin,
  AdmonitionDirectiveDescriptor,
  InsertAdmonition,
} from "@mdxeditor/editor";

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      plugins={[
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        toolbarPlugin({
          toolbarContents() {
            return (
              <>
                {" "}
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <BlockTypeSelect />
                <InsertAdmonition />
                <ListsToggle />
              </>
            );
          },
        }),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
