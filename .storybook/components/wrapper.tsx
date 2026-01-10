import { useEffect } from 'react'
import { StoryContext } from '@storybook/nextjs'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Wrapper = (Story, context: StoryContext) => {
  const {theme} = context.globals

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark-mode')
    else document.documentElement.classList.remove('dark-mode')
  }, [theme])

  return (
    <div className={`prose relative min-h-24 p-4 flex items-center justify-center bg-primary`}>
      <Story/>
    </div>
  )
}

export default Wrapper