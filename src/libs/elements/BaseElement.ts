import ContentCategoryType from '@/libs/elements/ContentCategoryType';

export default abstract class BaseElement {
  public name: string = '';
  public _childrenModel:
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty = ContentCategoryType.Empty;
  public _parentsModel:
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty = ContentCategoryType.Empty;
  public parent: BaseElement | undefined;
  public children: [BaseElement] | undefined;
  public attribute: Record<string, string> = {};

  constructor(parent?: BaseElement, children?: [BaseElement]) {
    this.parent = parent;
    this.children = children;
  }

  public get parentsModel():
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty {
    if (this._parentsModel.includes(ContentCategoryType.Transparent)) {
      if (typeof this.parent !== 'undefined') {
        return this.parent.parentsModel;
      } else {
        return ContentCategoryType.Empty;
      }
    } else {
      return this._parentsModel;
    }
  }

  public get childrenModel():
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty {
    return this._childrenModel;
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
