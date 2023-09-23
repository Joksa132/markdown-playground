import Link from 'next/link'
import { BiSolidChevronDown, BiLogoGithub } from 'react-icons/bi'

export default function Header() {

  return (
    <header className="py-2 px-4 bg-slate-700 text-slate-200 flex justify-between items-center uppercase">
      <h1 className="tracking-widest select-none text-[13px] hover:text-slate-400">Markdown Playground</h1>
      <div className="flex items-center gap-8">
        <span className="tracking-widest flex gap-2 items-center text-[11px] cursor-pointer hover:text-slate-400">
          Export as
          <BiSolidChevronDown />
        </span>
        <Link href={"https://github.com/Joksa132/markdown-playground"} target="_blank">
          <BiLogoGithub size={30} />
        </Link>
      </div>
    </header>
  )
}