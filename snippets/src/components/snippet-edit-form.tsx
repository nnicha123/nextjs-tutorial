"use client";

import { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { startTransition, useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    // startTransition(async () => {
    //     await actions.editSnippet(snippet.id,code)
    // })
    setCode(value);
  };

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minmap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
}
