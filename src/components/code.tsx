import * as React from 'react'
import { useEffect } from 'react'
import Prism from 'prismjs'

function Code (props: {lang: string, data: string}) {
  return <code className={props.lang}>
    {props.data}
  </code>
}

function HTML (props: {data: string}) {
  useEffect(() => {
    setTimeout(Prism.highlightAll(), 0)
  })
  return <pre className="lang-html">
    <code className="lang-html">
      {props.data}
    </code>
  </pre>
}

export {
  Code,
  HTML
}
