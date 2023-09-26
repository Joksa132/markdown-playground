"use client"

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import { AiFillEyeInvisible } from "react-icons/ai"
import { useEffect, useRef } from "react"

type Props = {
  markdown: string;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  showPreview: boolean;
  setConvertedHtml: React.Dispatch<React.SetStateAction<string>>;
}

export default function MarkdownPreview({ markdown, setShowPreview, showPreview, setConvertedHtml }: Props) {
  const markdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (markdownRef.current) {
      const markdownHtml = markdownRef.current.innerHTML;
      setConvertedHtml(markdownHtml)
    }
  }, [markdown, setConvertedHtml])

  return (
    <div className={`w-1/2 max-[600px]:w-full border-[1px] border-slate-200 ${showPreview ? 'max-[600px]:flex max-[600px]:flex-col' : 'max-[600px]:hidden'}`}>
      <div className="px-4 py-3 flex justify-between items-center">
        <h2 className="uppercase text-xs text-slate-400 tracking-wider">preview</h2>
        <span
          className="hidden max-[600px]:flex items-center gap-1 cursor-pointer uppercase text-xs text-slate-400 tracking-wider"
          onClick={() => setShowPreview(false)}
        >
          <AiFillEyeInvisible size={22} />
          markdown
        </span>
      </div>
      <div className="border-t-[1px] h-[calc(100vh-90px)] overflow-y-scroll p-2 break-words w-full prose" ref={markdownRef}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  )
}