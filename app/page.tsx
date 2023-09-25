"use client"

import Header from "@/components/Header"
import MarkdownInput from "@/components/MarkdownInput"
import MarkdownPreview from "@/components/MarkdownPreview"
import { MarkdownContext } from "@/context/MarkdownContext"
import { useContext } from "react"
import { SnackbarProvider } from 'notistack'

export default function Home() {
  const { markdownInput, setMarkdownInput } = useContext(MarkdownContext)

  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main className="flex">
        <MarkdownInput markdown={markdownInput} setMarkdownInput={setMarkdownInput} />
        <MarkdownPreview markdown={markdownInput} />
      </main>
      <SnackbarProvider autoHideDuration={3000} />
    </div>
  )
}
