import React, { useState, useEffect } from 'react'
import '../assets/HeroSection.css'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Editor from "react-simple-code-editor"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import axios from 'axios'

const HeroSection = () => {

  useEffect(() => {
    prism.highlightAll()
  }, [])

  const [code, setCode] = useState(`function sum(a, b) {
    return a + b;
  }`)

  const [review, setReview] = useState('')

  async function getReview() {
    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.js, 'js')}
            padding={10}
            className="editor"
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              color: '#f8f8f2',
              width: '100%',
              height: '100%',
              borderRadius:'8px',
            }}
          />
        </div>
        <div className="review" onClick={getReview}>
          Review
        </div>
      </div>
      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  )
}

export default HeroSection
