import { useState, useRef } from 'react'
import { ClipboardCopyIcon } from '@heroicons/react/outline'

const Pre = (props) => {
  const textInput = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  const onEnter = () => {
    setHovered(true)
  }
  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      <pre>{props.children}</pre>
    </div>
  )
}

export default Pre
