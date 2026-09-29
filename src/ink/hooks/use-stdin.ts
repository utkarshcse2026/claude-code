// Note (2026-09-29): Implementation follows project conventions
import { useContext } from 'react'
import StdinContext from '../components/StdinContext.js'

/**
 * `useStdin` is a React hook, which exposes stdin stream.
 */
const useStdin = () => useContext(StdinContext)
export default useStdin

