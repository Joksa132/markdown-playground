"use client"

import Link from 'next/link'
import { useContext, useState } from "react"
import { BiSolidChevronDown, BiLogoGithub } from 'react-icons/bi'
import { MarkdownContext } from "@/context/MarkdownContext"
import { exportAsMarkdown, exportAsHtml } from '@/util/exportFunctions'

export default function Header({ convertedHtml }: { convertedHtml: string }) {
  const { markdownInput, saveMarkdown } = useContext(MarkdownContext)
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false)

  return (
    <header className="py-2 px-4 bg-slate-700 text-slate-200 flex justify-between items-center uppercase font-medium">
      <Link href={"/"}>
        <h1 className="max-[380px]:hidden tracking-widest select-none text-[13px] hover:text-slate-400 cursor-pointer max-[500px]:text-[10px]">Markdown Playground</h1>
        <h1 className="hidden max-[380px]:block tracking-widest select-none text-[13px] hover:text-slate-400 cursor-pointer max-[500px]:text-[10px]">Home</h1>
      </Link>
      <div className="flex items-center gap-8 text-[11px] max-[600px]:gap-4 max-[500px]:text-[9px] max-[500px]:gap-2">
        <span
          className="tracking-widest flex gap-2 items-center cursor-pointer hover:text-slate-400"
          onClick={() => saveMarkdown(markdownInput)}
        >
          Save
        </span>
        <div className="relative">
          <span
            className={`tracking-widest flex gap-2 items-center cursor-pointer hover:text-slate-400`}
            onClick={() => setIsMenuClicked(!isMenuClicked)}
          >
            Export as
            <BiSolidChevronDown />
          </span>
          <div className={`${isMenuClicked ? 'flex' : 'hidden'} flex-col p-2 gap-2 absolute w-full bg-slate-800 mt-3 z-20`}>
            <span
              className="cursor-pointer hover:text-slate-300 tracking-widest"
              onClick={() => exportAsMarkdown(markdownInput)}
            >
              Markdown
            </span>
            <span
              className="cursor-pointer hover:text-slate-300 tracking-widest"
              onClick={() => exportAsHtml(convertedHtml)}
            >
              HTML
            </span>
          </div>
        </div>
        <Link href={"/help"}>
          <span className="tracking-widest flex gap-2 items-center cursor-pointer hover:text-slate-400">
            Help
          </span>
        </Link>
        <Link href={"https://github.com/Joksa132/markdown-playground"} target="_blank">
          <BiLogoGithub size={30} />
        </Link>
      </div>
    </header>
  )
}