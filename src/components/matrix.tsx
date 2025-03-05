'use client'

import { useTheme } from 'next-themes'
import React, { useEffect, useRef, useState } from 'react'

interface MatrixBackgroundProps {
  timeout?: number
  textColor?: string
  backgroundColor?: string
  opacity?: number
  fontSize?: number
  density?: number
  respectTheme?: boolean
}

function MatrixBackground({
  timeout = 50,
  textColor = '#0f0',
  backgroundColor = '#000',
  opacity = 0.05,
  fontSize = 15,
  density = 20,
  respectTheme = true,
}: MatrixBackgroundProps) {
  const canvas = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine colors based on theme if respectTheme is true
  const effectiveTextColor =
    mounted && respectTheme
      ? resolvedTheme === 'dark'
        ? textColor
        : '#0078d7'
      : textColor

  const effectiveBackgroundColor =
    mounted && respectTheme
      ? resolvedTheme === 'dark'
        ? backgroundColor
        : '#ffffff'
      : backgroundColor

  useEffect(() => {
    if (!canvas.current || !mounted) return

    const context = canvas.current.getContext('2d')
    if (!context) return

    const width = document.body.offsetWidth
    const height = document.body.offsetHeight
    canvas.current.width = width
    canvas.current.height = height

    context.fillStyle = effectiveBackgroundColor
    context.fillRect(0, 0, width, height)

    const columns = Math.floor(width / density) + 1
    const yPositions = Array.from({ length: columns }).fill(0)

    context.fillStyle = effectiveBackgroundColor
    context.fillRect(0, 0, width, height)

    const matrixEffect = () => {
      // Create a semi-transparent background to create the fade effect
      context.fillStyle = `${effectiveBackgroundColor}${Math.floor(
        opacity * 255,
      )
        .toString(16)
        .padStart(2, '0')}`
      context.fillRect(0, 0, width, height)

      context.fillStyle = effectiveTextColor
      context.font = `${fontSize}pt monospace`

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128)
        const x = index * density
        context.fillText(text, x, y as number)

        if ((y as number) > 100 + Math.random() * 10000) {
          yPositions[index] = 0
        } else {
          yPositions[index] = (y as number) + density
        }
      })
    }

    const interval = setInterval(matrixEffect, timeout)
    return () => {
      clearInterval(interval)
    }
  }, [
    timeout,
    effectiveTextColor,
    effectiveBackgroundColor,
    opacity,
    fontSize,
    density,
    mounted,
  ])

  if (!mounted) return null

  return (
    <div
      style={{
        background: effectiveBackgroundColor,
        overflow: 'hidden',
        position: 'fixed',
        height: '100%',
        width: '100%',
        zIndex: -1,
        left: '0',
        top: '0',
      }}
    >
      <canvas ref={canvas} />
    </div>
  )
}

export default MatrixBackground
