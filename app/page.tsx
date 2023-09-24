"use client"

import Header from "@/components/Header"
import MarkdownInput from "@/components/MarkdownInput"
import MarkdownPreview from "@/components/MarkdownPreview"
import { useState } from "react"

export default function Home() {
  const [markdownInput, setMarkdownInput] = useState<string>("")

  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main className="flex">
        <MarkdownInput setMarkdownInput={setMarkdownInput} />
        <MarkdownPreview markdown={markdownInput} />
      </main>
    </div>
  )
}
