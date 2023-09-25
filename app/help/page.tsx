"use client"

import Header from "@/components/Header";
import MarkdownInput from "@/components/MarkdownInput";
import MarkdownPreview from "@/components/MarkdownPreview";
import { helpMarkdown } from "@/util/helpMarkdown";
import { useState } from "react";

export default function Help() {
  const [showPreview, setShowPreview] = useState<boolean>(false)

  return (
    <div className="flex flex-col w-full h-screen overflow-hidden">
      <Header />
      <div className="flex">
        <MarkdownInput
          markdown={helpMarkdown}
          setMarkdownInput={() => { }}
          isMain={false}
          setShowPreview={setShowPreview}
          showPreview={showPreview}
        />
        <MarkdownPreview
          markdown={helpMarkdown}
          setShowPreview={setShowPreview}
          showPreview={showPreview}
        />
      </div>
    </div>
  )
}