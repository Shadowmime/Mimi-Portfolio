import { useEffect, useState } from 'react'

export function useTypewriter(words: string[], speed = 120, pause = 1500) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout: number

    if (!deleting && text.length < current.length) {
      timeout = window.setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        speed
      )
    } else if (deleting && text.length > 0) {
      timeout = window.setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        speed / 2
      )
    } else {
      timeout = window.setTimeout(() => {
        setDeleting(!deleting)
        if (!deleting) {
          setTimeout(() => {}, pause)
        } else {
          setWordIndex((wordIndex + 1) % words.length)
        }
      }, pause)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}
