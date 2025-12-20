'use client'

import { type FC } from 'react'

import { tm } from '@/helpers/tailwind-merge'

const bandMap: Record<string, string> = {
  brand: 'bg-fg-brand-primary',
  error: 'bg-fg-error-primary',
  success: 'bg-fg-success-primary',
  warning: 'bg-fg-warning-primary',
  default: 'bg-gray-600'
}

type ProgressBarProps = {
  value: number
  min?: number
  max?: number
  className?: string
  progressClassName?: string
  valueFormatter?: (value: number, valueInPercentage: number) => string | number
  bandColor?: 'brand' | 'error' | 'success' | 'warning'
}

/**
 * A basic progress bar component.
 */
const ProgressBarBase: FC<ProgressBarProps> = ({value, min = 0, max = 100, bandColor = 'brand', className, progressClassName}) => {
  const percentage = ((value - min) * 100) / (max - min)

  return (
    <div role='progressbar' aria-valuenow={value} aria-valuemin={min} aria-valuemax={max} className={tm('h-2 w-full overflow-hidden rounded-md bg-quaternary', className)}>
      <div
        // Use transform instead of width to avoid layout thrashing (and for smoother animation)
        style={{transform: `translateX(-${100 - percentage}%)`}}
        className={tm('h-full w-full rounded-md transition duration-75 ease-linear', bandMap[bandColor], progressClassName)}
      />
    </div>
  )
}

type ProgressBarLabelPosition = 'right' | 'bottom' | 'top-floating' | 'bottom-floating'

type ProgressIndicatorWithTextProps = ProgressBarProps & {
  labelPosition?: ProgressBarLabelPosition
}

/**
 * A progress bar component that displays the value text in various configurable layouts.
 */
const ProgressBar: FC<ProgressIndicatorWithTextProps> = ({value, min = 0, max = 100, valueFormatter, labelPosition, bandColor = 'brand', className, progressClassName}) => {
  const percentage = ((value - min) * 100) / (max - min)
  const formattedValue = valueFormatter ? valueFormatter(value, percentage) : `${percentage.toFixed(0)}%` // Default to rounded percentage

  const baseProgressBar = <ProgressBarBase min={min} max={max} value={value} className={className} bandColor={bandColor} progressClassName={progressClassName}/>

  switch (labelPosition) {
    case 'right':
      return (
        <div className='w-full flex items-center gap-3'>
          {baseProgressBar}
          <span className='shrink-0 text-sm font-medium text-secondary tabular-nums'>{formattedValue}</span>
        </div>
      )
    case 'bottom':
      return (
        <div className='w-full flex flex-col items-end gap-2'>
          {baseProgressBar}
          <span className='text-sm font-medium text-secondary tabular-nums'>{formattedValue}</span>
        </div>
      )
    case 'top-floating':
      return (
        <div className='w-full relative flex flex-col items-end gap-2'>
          {baseProgressBar}
          <div style={{left: `${percentage}%`}} className='absolute -top-2 -translate-x-1/2 -translate-y-full rounded-md bg-primary_alt px-3 py-2 shadow-lg ring-1 ring-secondary_alt'>
            <div className='text-xs font-semibold text-secondary tabular-nums'>{formattedValue}</div>
          </div>
        </div>
      )
    case 'bottom-floating':
      return (
        <div className='w-full relative flex flex-col items-end gap-2'>
          {baseProgressBar}
          <div style={{left: `${percentage}%`}} className='absolute -bottom-2 -translate-x-1/2 translate-y-full rounded-md bg-primary_alt px-3 py-2 shadow-lg ring-1 ring-secondary_alt'>
            <div className='text-xs font-semibold text-secondary'>{formattedValue}</div>
          </div>
        </div>
      )
    default:
      // Fallback or default case, could render the basic progress bar or throw an error
      return baseProgressBar
  }
}

ProgressBar.displayName = 'ProgressBar'

export { ProgressBar }
