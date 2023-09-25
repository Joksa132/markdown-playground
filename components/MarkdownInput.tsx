import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";
import { AiFillEye } from "react-icons/ai"

type Props = {
  markdown: string;
  setMarkdownInput: React.Dispatch<React.SetStateAction<string>>;
  isMain: boolean;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  showPreview: boolean;
}

export default function MarkdownInput({ markdown, setMarkdownInput, isMain, setShowPreview, showPreview }: Props) {

  const handleMarkdownChange = (markdown: string) => {
    setMarkdownInput(markdown)
  }

  return (
    <div className={`w-1/2 max-[600px]:w-full border-[1px] border-slate-200 ${showPreview ? 'max-[600px]:hidden' : 'max-[600px]:flex max-[600px]:flex-col'}`}>
      <div className="px-4 py-3 flex justify-between items-center">
        <h2 className="uppercase text-xs text-slate-400 tracking-wider">markdown</h2>
        <span
          className="hidden max-[600px]:flex items-center gap-1 cursor-pointer uppercase text-xs text-slate-400 tracking-wider"
          onClick={() => setShowPreview(true)}
        >
          <AiFillEye size={22} />
          preview
        </span>
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
            className="w-full resize-none outline-none border-t-[1px] p-2 text-lg h-[calc(100vh-90px)] overflow-y-scroll"
            name="markdownHelp"
            id="markdownHelp"
            value={markdown}
            disabled
          />
      }
    </div>
  )
}