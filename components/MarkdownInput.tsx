export default function MarkdownInput() {

  return (
    <div className="w-1/2 border-[1px] border-slate-200 flex flex-col">
      <div className="p-3">
        <h2 className="uppercase text-xs text-slate-400 tracking-wider">markdown</h2>
      </div>
      <textarea className="resize-none outline-none border-t-[1px] p-2 text-lg h-[calc(100vh-93px)] overflow-y-scroll" />
    </div>
  )
}