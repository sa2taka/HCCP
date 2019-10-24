import ContentCategoryType from '@/libs/elements/ContentCategoryType';

export default class BaseElement {
  public name: string = '';
  public _childrenModels:
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty = ContentCategoryType.Empty;
  public _parentsModels:
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty = ContentCategoryType.Empty;
  public parent: BaseElement | undefined;
  public children: [BaseElement] | undefined;
  public attributes: Record<string, string>;

  constructor(
    name: string,
    childrenModels: [ContentCategoryType | string] | ContentCategoryType.Empty,
    parentsModels: [ContentCategoryType | string] | ContentCategoryType.Empty,
    parent?: BaseElement,
    children?: [BaseElement],
    attribute: Record<string, string> = {}
  ) {
    this.name = name;
    this._childrenModels = childrenModels;
    this._parentsModels = parentsModels;
    this.parent = parent;
    this.children = children;
    this.attributes = attribute;
  }

  public get parentsModels():
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty {
    if (this._parentsModels.includes(ContentCategoryType.Transparent)) {
      if (typeof this.parent !== 'undefined') {
        return this.parent.parentsModels;
      } else {
        return ContentCategoryType.Empty;
      }
    } else {
      return this._parentsModels;
    }
  }

  public get childrenModels():
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty {
    return this._childrenModels;
  }

  public appendChild(child: BaseElement) {
    if (typeof this.children !== 'undefined') {
      this.children.push(child);
    } else {
      this.children = [child];
    }
  }

  abstract isValid(): boolean;
}
