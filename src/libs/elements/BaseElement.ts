import ContentCategoryType from '@/libs/elements/ContentCategoryType';

export default class BaseElement {
  public name: string = '';
  public _contentModel:
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty = ContentCategoryType.Empty;
  public _context: [ContentCategoryType | string] | ContentCategoryType.Empty =
    ContentCategoryType.Empty;
  public parent: BaseElement | undefined;
  public children: [BaseElement] | undefined;
  public attributes: Record<string, string>;

  constructor(
    name: string,
    contentModel: [ContentCategoryType | string] | ContentCategoryType.Empty,
    context: [ContentCategoryType | string] | ContentCategoryType.Empty,
    parent?: BaseElement,
    children?: [BaseElement],
    attribute: Record<string, string> = {}
  ) {
    this.name = name;
    this._contentModel = contentModel;
    this._context = context;
    this.parent = parent;
    this.children = children;
    this.attributes = attribute;
  }

  public get contentModel():
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty {
    if (this._contentModel.includes(ContentCategoryType.Transparent)) {
      if (typeof this.parent !== 'undefined') {
        return this.parent.context;
      } else {
        return ContentCategoryType.Empty;
      }
    } else {
      return this._contentModel;
    }
  }

  // The following code is general.
  // Special scenes are implemented in inheritance.
  public get context():
    | [ContentCategoryType | string]
    | ContentCategoryType.Empty {
    return this._context;
  }

  // The following code is general.
  // Special scenes are implemented in inheritance.
  public appendChild(child: BaseElement) {
    if (typeof this.children !== 'undefined') {
      this.children.push(child);
    } else {
      this.children = [child];
    }
  }

  //
  public isValid(): boolean {
    if (typeof this.parent === 'undefined') {
      return this.isValidAsParentIsEmpty();
    }

    // The following code is general.
    // Special scenes are implemented in inheritance.
    const parentAllowModels = this.parent.contentModel;

    // If parent's children model(category model) is empty(nothing),
    // element is basically invalid.
    // An exception is the 'template' element.
    if (parentAllowModels === ContentCategoryType.Empty) {
      return false;
    }

    return parentAllowModels.some((model) => {
      if (typeof model === 'string') {
        return this.name === model;
      } else {
        return this.context.includes(model);
      }
    });
  }

  private isValidAsParentIsEmpty(): boolean {
    if (
      this.contentModel !== ContentCategoryType.Empty &&
      this.contentModel.every((elm) => typeof elm === 'string')
    ) {
      return false;
    } else {
      return true;
    }
  }
}
