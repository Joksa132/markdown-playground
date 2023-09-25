"use client"

import Link from 'next/link'
import { useContext, useState } from "react"
import { BiSolidChevronDown, BiLogoGithub } from 'react-icons/bi'
import { MarkdownContext } from "@/context/MarkdownContext"

export default function Header() {
  const { markdownInput, saveMarkdown } = useContext(MarkdownContext)
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false)

  return (
    <header className="py-2 px-4 bg-slate-700 text-slate-200 flex justify-between items-center uppercase">
      <Link href={"/"}>
        <h1 className="tracking-widest select-none text-[13px] hover:text-slate-400 cursor-pointer">Markdown Playground</h1>
      </Link>
      <div className="flex items-center gap-8">
        <span
          className="tracking-widest flex gap-2 items-center text-[11px] cursor-pointer hover:text-slate-400"
          onClick={() => saveMarkdown(markdownInput)}
        >
          Save
        </span>
        <div className="relative">
          <span
            className={`tracking-widest flex gap-2 items-center text-[11px] cursor-pointer hover:text-slate-400`}
            onClick={() => setIsMenuClicked(!isMenuClicked)}
          >
            Export as
            <BiSolidChevronDown />
          </span>
          <div className={`${isMenuClicked ? 'flex' : 'hidden'} flex-col text-[11px] p-2 gap-2 absolute h-20 w-full bg-slate-800 mt-3`}>
            <span className="cursor-pointer hover:text-slate-300 tracking-widest">
              Markdown
            </span>
            <span className="cursor-pointer hover:text-slate-300 tracking-widest">
              PDF
            </span>
            <span className="cursor-pointer hover:text-slate-300 tracking-widest">
              HTML
            </span>
          </div>
        </div>
        <Link href={"/help"}>
          <span className="tracking-widest flex gap-2 items-center text-[11px] cursor-pointer hover:text-slate-400">
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