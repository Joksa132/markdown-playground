export default function MarkdownPreview() {

  return (
    <div className="w-1/2 border-[1px] border-slate-200 flex flex-col">
      <div className="px-4 py-3">
        <h2 className="uppercase text-xs text-slate-400 tracking-wider">preview</h2>
      </div>
      <div className="border-t-[1px] h-[calc(100vh-88px)] overflow-y-scroll"></div>
    </div>
  )
}