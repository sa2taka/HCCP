import BaseElement from '@/libs/elements/BaseElement';
import ContentCategoryType from '@/libs/elements/ContentCategoryType';

namespace ElementBuilder {
  const build = (
    name: string,
    parent?: BaseElement,
    children?: [BaseElement],
    attribute: Record<string, string> = {}
  ): BaseElement => {
    const specialElement = buildSpecialElement(
      name,
      parent,
      children,
      attribute
    );

    if (specialElement) {
      return specialElement;
    }

    const { context, contentModel } = Relationship[name];

    return new BaseElement(
      name,
      contentModel,
      context,
      parent,
      children,
      attribute
    );
  };

  const buildSpecialElement = (
    name: string,
    parent?: BaseElement,
    children?: [BaseElement],
    attribute: Record<string, string> = {}
  ): BaseElement | null => {
    // TODO write code to build special element
    return null;
  };

  interface Category {
    context: [ContentCategoryType | string] | ContentCategoryType.Empty;
    contentModel: [ContentCategoryType | string] | ContentCategoryType.Empty;
  }

  // Relationship Between Element And Category
  const Relationship: Record<string, Category> = {
    a: {
      context: [ContentCategoryType.Phrasing],
      contentModel: [ContentCategoryType.Transparent],
    },
  };
}
