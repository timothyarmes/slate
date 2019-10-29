/** @jsx h */

import { h } from '../../helpers'

export const input = (
  <value>
    <block>one</block>
  </value>
)

export const run = editor => {
  return editor.getAncestor({ path: [0, 0], offset: 1 })
}

export const output = [<block>one</block>, [0]]