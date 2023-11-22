type TNode = {
  tagName: string;
  parent?: HTMLElement;
  classList?: string[];
  textContext?: string;
};
export default function Node(nodeParams: TNode) {
  const tag = document.createElement(nodeParams.tagName);
  if (nodeParams.parent) nodeParams.parent.append(tag);
  if (nodeParams.classList) tag.classList.add(...nodeParams.classList);
  if (nodeParams.textContext) tag.textContent = nodeParams.textContext;
  return tag;
}
