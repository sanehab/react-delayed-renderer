import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

const DelayedRendererBase = ({ delay, children, onRender }) => {
  const [shouldRender, setShouldRender] = useState(false)

  const timeoutIdRef = useRef()

  useEffect(() => {
    setShouldRender(false)
    timeoutIdRef.current = setTimeout(() => setShouldRender(true), delay)

    return () => clearTimeout(timeoutIdRef.current)
  }, [delay])

  useEffect(() => {
    if (shouldRender && onRender) {
      onRender()
    }
  }, [shouldRender, onRender])

  return shouldRender ? <>{children}</> : null
}

DelayedRendererBase.propTypes = {
  delay: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  onRender: PropTypes.func,
}

export const DelayedRenderer = React.memo(DelayedRendererBase)
DelayedRenderer.displayName = "DelayedRenderer"
