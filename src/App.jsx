import portfolioHtml from './portafolio-source.html?raw'

const styleMatch = portfolioHtml.match(/<style>([\s\S]*?)<\/style>/i)
const bodyMatch = portfolioHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)

const portfolioStyles = styleMatch?.[1] ?? ''
const portfolioBody = bodyMatch?.[1] ?? ''

function App() {
  return (
    <>
      <style>{portfolioStyles}</style>
      <div dangerouslySetInnerHTML={{ __html: portfolioBody }} />
    </>
  )
}

export default App
