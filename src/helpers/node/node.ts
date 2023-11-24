type TNode = {
  tagName: string;
  parent?: HTMLElement;
  classList?: string[];
  textContent?: string;
};
export default function Node(nodeParams: TNode) {
  const tag = document.createElement(nodeParams.tagName);
  if (nodeParams.parent) nodeParams.parent.append(tag);
  if (nodeParams.classList) tag.classList.add(...nodeParams.classList);
  if (nodeParams.textContent) tag.textContent = nodeParams.textContent;
  return tag;
}
