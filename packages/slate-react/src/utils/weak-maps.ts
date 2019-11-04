import { Node, Ancestor, Editor } from 'slate'

/**
 * Two weak maps that allow us rebuild a path given a node. They are populated
 * at render time such that after a render occurs we can always backtrack.
 */

export const NODE_TO_INDEX: WeakMap<Node, number> = new WeakMap()
export const NODE_TO_PARENT: WeakMap<Node, Ancestor> = new WeakMap()

/**
 * Two weak maps that allow us to go between Slate nodes and DOM nodes. These
 * are used to resolve DOM event-related logic into Slate actions.
 */

export const EDITOR_TO_ELEMENT: WeakMap<Editor, HTMLElement> = new WeakMap()
export const NODE_TO_ELEMENT: WeakMap<Node, HTMLElement> = new WeakMap()
export const ELEMENT_TO_NODE: WeakMap<HTMLElement, Node> = new WeakMap()

/**
 * Weak maps for storing editor-related state.
 */

export const IS_READ_ONLY: WeakMap<Editor, boolean> = new WeakMap()
export const IS_FOCUSED: WeakMap<Editor, boolean> = new WeakMap()
export const IS_DRAGGING: WeakMap<Editor, boolean> = new WeakMap()
export const IS_CLICKING: WeakMap<Editor, boolean> = new WeakMap()
