"use client"

import Header from "@/components/Header"
import MarkdownInput from "@/components/MarkdownInput"
import MarkdownPreview from "@/components/MarkdownPreview"
import { MarkdownContext } from "@/context/MarkdownContext"
import { useContext, useState } from "react"
import { SnackbarProvider } from 'notistack'

export default function Home() {
  const { markdownInput, setMarkdownInput } = useContext(MarkdownContext)
  const [showPreview, setShowPreview] = useState<boolean>(false)
  const [convertedHtml, setConvertedHtml] = useState<string>('')

  return (
    <div className="flex flex-col w-full h-screen">
      <Header convertedHtml={convertedHtml} />
      <main className="flex">
        <MarkdownInput
          markdown={markdownInput}
          setMarkdownInput={setMarkdownInput}
          isMain={true}
          setShowPreview={setShowPreview}
          showPreview={showPreview}
        />
        <MarkdownPreview
          markdown={markdownInput}
          setShowPreview={setShowPreview}
          showPreview={showPreview}
          setConvertedHtml={setConvertedHtml}
        />
      </main>
      <SnackbarProvider autoHideDuration={3000} />
    </div>
  )
}
