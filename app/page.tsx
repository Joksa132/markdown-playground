import Header from "@/components/Header"
import MarkdownInput from "@/components/MarkdownInput"
import MarkdownPreview from "@/components/MarkdownPreview"

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <main className="flex">
        <MarkdownInput />
        <MarkdownPreview />
      </main>
    </div>
  )
}
