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
    <div className={'grid grid-cols-2'} >
      <div className={`dark-mode prose relative min-h-64 p-4 flex items-center justify-center bg-primary`}>
        <Story/>
      </div>
    <div className={`prose relative min-h-64 p-4 flex items-center justify-center bg-primary`}>
      <Story/>
    </div>
    </div>
  )
}

export default Wrapper
