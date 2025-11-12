'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface DirectionalNavButtonsProps {
  onPrevious: () => void
  onNext: () => void
  disablePrevious?: boolean
  disableNext?: boolean
  className?: string
}

/**
 * Directional Navigation Buttons Component - Royal Business Style
 * 
 * A reusable component for horizontal navigation with < | > layout
 * Designed to be placed at the bottom center of slides
 * 
 * Features:
 * - Dark semi-transparent container (Royal Business style)
 * - Off-white/Silver icons with vertical separator
 * - Gold/Bronze hover effect
 * - Smooth animations and transitions
 * - Automatic disable states
 * 
 * @param onPrevious - Function to handle previous navigation
 * @param onNext - Function to handle next navigation
 * @param disablePrevious - Optional: Disable the previous button
 * @param disableNext - Optional: Disable the next button
 * @param className - Optional: Additional CSS classes
 */
export default function DirectionalNavButtons({
  onPrevious,
  onNext,
  disablePrevious = false,
  disableNext = false,
  className = '',
}: DirectionalNavButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`inline-flex items-center bg-black/70 backdrop-blur-md rounded-lg shadow-2xl border border-white/10 ${className}`}
    >
      {/* Previous Button (Left Arrow) */}
      <motion.button
        onClick={onPrevious}
        disabled={disablePrevious}
        whileHover={!disablePrevious ? { scale: 1.05 } : {}}
        whileTap={!disablePrevious ? { scale: 0.95 } : {}}
        className={`
          group relative px-6 py-4 transition-all duration-300
          ${disablePrevious 
            ? 'opacity-40 cursor-not-allowed' 
            : 'hover:bg-amber-400/20 cursor-pointer'
          }
        `}
        aria-label="Previous"
        aria-disabled={disablePrevious}
      >
        <ChevronLeft
          className={`
            w-5 h-5 transition-colors duration-300
            ${disablePrevious 
              ? 'text-gray-500' 
              : 'text-gray-300 group-hover:text-amber-400'
            }
          `}
          strokeWidth={2.5}
        />
      </motion.button>

      {/* Vertical Separator */}
      <div className="h-7 w-px bg-gray-400/40" />

      {/* Next Button (Right Arrow) */}
      <motion.button
        onClick={onNext}
        disabled={disableNext}
        whileHover={!disableNext ? { scale: 1.05 } : {}}
        whileTap={!disableNext ? { scale: 0.95 } : {}}
        className={`
          group relative px-6 py-4 transition-all duration-300
          ${disableNext 
            ? 'opacity-40 cursor-not-allowed' 
            : 'hover:bg-amber-400/20 cursor-pointer'
          }
        `}
        aria-label="Next"
        aria-disabled={disableNext}
      >
        <ChevronRight
          className={`
            w-5 h-5 transition-colors duration-300
            ${disableNext 
              ? 'text-gray-500' 
              : 'text-gray-300 group-hover:text-amber-400'
            }
          `}
          strokeWidth={2.5}
        />
      </motion.button>
    </motion.div>
  )
}
