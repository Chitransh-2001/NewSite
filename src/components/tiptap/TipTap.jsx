"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import { Button, Box } from "@mui/material";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatListBulleted,
} from "@mui/icons-material";

const TipTap = ({ content, setContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false, // Disable built-in bullet list to avoid conflicts
        orderedList: false, // Disable ordered list (optional)
      }),
      BulletList,
      ListItem,
      Bold,
      Italic,
      Underline,
      Heading.configure({ levels: [1, 2, 3] }),
    ],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML()); // Save the HTML content
    },
  });

  if (!editor) return null;

  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        p: 2,
        "& ul": {
          listStyleType: "disc",
          paddingLeft: "20px",
        },
        "& li": {
          marginBottom: "4px",
        },
        "& h1": {
          fontSize: "1.6rem",
          fontWeight: "bold",
          marginBottom: "8px",
        },
        "& h2": {
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginBottom: "6px",
        },
      }}
    >
      {/* Toolbar */}
      <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          variant={editor.isActive("bold") ? "contained" : "outlined"}
        >
          <FormatBold />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          variant={editor.isActive("italic") ? "contained" : "outlined"}
        >
          <FormatItalic />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          variant={editor.isActive("underline") ? "contained" : "outlined"}
        >
          <FormatUnderlined />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <FormatListBulleted />
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H1
        </Button>
        <Button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          H2
        </Button>
      </Box>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        style={{
          minHeight: "150px",
          border: "1px solid #ddd",
          padding: "10px",
          borderRadius: "4px",
        }}
      />
    </Box>
  );
};

export default TipTap;
