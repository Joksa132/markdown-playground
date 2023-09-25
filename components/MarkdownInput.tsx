import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";

type Props = {
  markdown: string;
  setMarkdownInput: React.Dispatch<React.SetStateAction<string>>;
  isMain: boolean;
}

export default function MarkdownInput({ markdown, setMarkdownInput, isMain }: Props) {

  const handleMarkdownChange = (markdown: string) => {
    setMarkdownInput(markdown)
  }

  return (
    <div className="w-1/2 border-[1px] border-slate-200 flex flex-col">
      <div className="px-4 py-3">
        <h2 className="uppercase text-xs text-slate-400 tracking-wider">markdown</h2>
      </div>
      {
        isMain ?
          <div className="border-t-[1px] overflow-y-scroll h-[calc(100vh-88px)] py-1">
            <CodeMirror
              className="text-lg"
              onChange={handleMarkdownChange}
              extensions={[
                EditorView.lineWrapping
              ]}
              value={markdown}
            />
          </div>
          :
          <textarea
            className="resize-none outline-none border-t-[1px] p-2 text-lg h-[calc(100vh-88px)] overflow-y-scroll"
            name="markdownHelp"
            id="markdownHelp"
            value={markdown}
            disabled
          />
      }
    </div>
  )
}