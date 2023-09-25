import Header from "@/components/Header";
import MarkdownInput from "@/components/MarkdownInput";
import MarkdownPreview from "@/components/MarkdownPreview";
import { helpMarkdown } from "@/util/helpMarkdown";

export default function Help() {

  return (
    <div className="flex flex-col w-full h-screen">
      <Header />
      <div className="flex">
        <MarkdownInput markdown={helpMarkdown} setMarkdownInput={() => { }} isMain={false} />
        <MarkdownPreview markdown={helpMarkdown} />
      </div>
    </div>
  )
}