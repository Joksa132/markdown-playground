export const exportAsMarkdown = (markdownContent: string) => {
  const blob = new Blob([markdownContent], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'markdown.md';
  a.click();
  URL.revokeObjectURL(url);
};

export const exportAsHtml = (markdownContent: string) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Markdown Export</title>
    </head>
    <body>
      <div>${markdownContent}</div>
    </body>
    </html>
  `;
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'markdown.html';
  a.click();
  URL.revokeObjectURL(url);
}