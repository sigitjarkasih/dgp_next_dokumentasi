import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Box } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
// import './styles.scss'

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button type="button" onClick={() => editor.chain().focus().undo().run()}>
        <UndoIcon fontSize="small" />
      </button>
      <button type="button" onClick={() => editor.chain().focus().redo().run()}>
        <RedoIcon fontSize="small" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FormatBoldIcon fontSize="small" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FormatItalicIcon fontSize="small" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <FormatStrikethroughIcon fontSize="small" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <FormatListBulletedIcon fontSize="small" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <FormatListNumberedIcon fontSize="small" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <HorizontalRuleIcon fontSize="small" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h5
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h6
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        code
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        clear marks
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        clear nodes
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        paragraph
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        blockquote
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        hard break
      </button>
    </>
  );
};

// export default MenuBar;

export default Tiptap = ({ content, onUpdateEditor }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onUpdateEditor(html);
    },
    displayName: "editor",
  });

  return (
    <Box p={1} style={{ border: "1px solid grey" }}>
      <div style={{ border: "0px solid grey" }}>
        <MenuBar editor={editor} />
      </div>
      <Box p={3} minHeight={300}>
        <EditorContent
          editor={editor}
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </Box>
    </Box>
  );
};
