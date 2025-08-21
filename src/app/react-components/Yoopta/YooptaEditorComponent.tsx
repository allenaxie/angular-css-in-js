// src/react-components/yoopta-editor-setup.tsx
import React, { useMemo, useRef, useState } from "react";
import YooptaEditor, {
  createYooptaEditor,
  YooptaContentValue,
  YooptaOnChangeOptions,
} from "@yoopta/editor";

// import all Yoopta plugins like before
import Paragraph from "@yoopta/paragraph";
import Blockquote from "@yoopta/blockquote";
import Embed from "@yoopta/embed";
import Image from "@yoopta/image";
import Callout from "@yoopta/callout";
import Video from "@yoopta/video";
import File from "@yoopta/file";
import Accordion from "@yoopta/accordion";
import { NumberedList, BulletedList, TodoList } from "@yoopta/lists";
import {
  Bold,
  Italic,
  CodeMark,
  Underline,
  Strike,
  Highlight,
} from "@yoopta/marks";
import { HeadingOne, HeadingThree, HeadingTwo } from "@yoopta/headings";
import Code from "@yoopta/code";
import Table from "@yoopta/table";
import Divider from "@yoopta/divider";
import ActionMenuList, {
  DefaultActionMenuRender,
} from "@yoopta/action-menu-list";
import Toolbar, { DefaultToolbarRender } from "@yoopta/toolbar";

const plugins = [
  Paragraph,
  Table,
  Divider.extend({
    elementProps: {
      divider: (props) => ({
        ...props,
        color: "#007aff",
      }),
    },
  }),
  Accordion,
  HeadingOne,
  HeadingTwo,
  HeadingThree,
  Blockquote.extend({
    options: {
      shortcuts: [">"],
      HTMLAttributes: {
        style: {
          border: "3px solid green",
        },
      },
    },
  }),
  Callout,
  NumberedList,
  BulletedList,
  TodoList,
  Code,
  Embed,
  Image.extend({
    options: {
      async onUpload(file) {
        console.log("Uploading image to Cloudinary:", file);
        return {};
      },
    },
  }),
  Video.extend({
    options: {
      onUpload: async (file) => {
        console.log("Uploading image to Cloudinary:", file);
        return {};
      },
      onUploadPoster: async (file) => {
        console.log("Uploading image to Cloudinary:", file);
        return "";
      },
    },
  }),
  File.extend({
    options: {
      onUpload: async (file) => {
        console.log("Uploading image to Cloudinary:", file);
        return {} as any;
      },
    },
  }),
];

const TOOLS = {
  ActionMenu: {
    render: DefaultActionMenuRender,
    tool: ActionMenuList,
  },
  Toolbar: {
    render: DefaultToolbarRender,
    tool: Toolbar,
  },
};

const MARKS = [Bold, Italic, CodeMark, Underline, Strike, Highlight];

function WithBaseFullSetup() {
  const [value, setValue] = useState({});
  const editor = useMemo(() => createYooptaEditor(), []);
  const selectionRef = useRef(null);

  const onChange = (
    newValue: YooptaContentValue,
    _options: YooptaOnChangeOptions
  ) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        border: "1px solid var(--editor-border-color)",
        padding: "24px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        minHeight: "400px",
        maxWidth: "800px",
      }}
      ref={selectionRef}
    >
      <YooptaEditor
        editor={editor}
        plugins={plugins as any}
        tools={TOOLS}
        marks={MARKS}
        selectionBoxRoot={selectionRef}
        value={value}
        onChange={onChange}
        autoFocus
      />
    </div>
  );
}

export default WithBaseFullSetup;
