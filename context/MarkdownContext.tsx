"use client"

import { enqueueSnackbar } from "notistack";
import { createContext, useEffect, useState } from "react";

type MarkdownContextType = {
  markdownInput: string;
  setMarkdownInput: React.Dispatch<React.SetStateAction<string>>;
  saveMarkdown: (content: string) => void;
}

export const MarkdownContext = createContext<MarkdownContextType>({} as MarkdownContextType)

export function MarkdownProvider({ children }: { children: React.ReactNode }) {
  const [markdownInput, setMarkdownInput] = useState<string>('')

  useEffect(() => {
    const savedMarkdown = localStorage.getItem('markdown')
    if (savedMarkdown) {
      setMarkdownInput(savedMarkdown)
    }
  }, [])

  const saveMarkdown = (content: string) => {
    localStorage.setItem('markdown', content);
    enqueueSnackbar('Markdown successfully saved!')
  }

  return (
    <MarkdownContext.Provider value={{ markdownInput, setMarkdownInput, saveMarkdown }}>
      {children}
    </MarkdownContext.Provider>
  )
}