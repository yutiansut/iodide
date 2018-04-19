// The "Public API" for notebooks. This lets notebooks and third-party plugins
// extend and manipulate the notebook

import { addOutputHandler } from '../components/reps/value-renderer'
import { environment } from './environment'
import { flow } from './flow'

function getDataSync(url) {
  const re = new XMLHttpRequest()
  re.open('GET', url, false)
  re.send(null)
  return re.response
}

export const iodide = {
  addOutputHandler,
  getDataSync,
  environment,
  flow,
}

export default iodide
