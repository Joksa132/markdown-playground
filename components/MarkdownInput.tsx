type Props = {
  setMarkdownInput: React.Dispatch<React.SetStateAction<string>>;
}

export default function MarkdownInput({ setMarkdownInput }: Props) {

  return (
    <div className="w-1/2 border-[1px] border-slate-200 flex flex-col">
      <div className="px-4 py-3">
        <h2 className="uppercase text-xs text-slate-400 tracking-wider">markdown</h2>
      </div>
      <textarea
        className="resize-none outline-none border-t-[1px] p-2 text-lg h-[calc(100vh-88px)] overflow-y-scroll"
        name="markdownInput"
        id="markdownInput"
        onChange={(e) => setMarkdownInput(e.target.value)}
      />
    </div>
  )
}