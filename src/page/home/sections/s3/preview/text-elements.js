export const textElements = {
  textElements: document.querySelectorAll('.s3-text-box'),
  visibleElemIndex: null,

  getElemIndex(elem) {
    const elemIndex = [...this.textElements].findIndex((el) => el === elem);
    return elemIndex === -1 ? null : elemIndex;
  },
  updateCurrentIndex(elem) {
    const currentElemIndex = this.getElemIndex(elem);
    this.visibleElemIndex = currentElemIndex;
  },
  isLastTextGone(elem) {
    const lastIndex = this.textElements.length - 1;
    const isLast = this.getElemIndex(elem) === lastIndex;

    return isLast && this.visibleElemIndex === lastIndex;
  },
  isFirstTextGone(elem) {
    const isFirst = this.getElemIndex(elem) === 0;
    return isFirst && this.visibleElemIndex === 0;
  },
  isFinalElem(elem) {
    return this.isFirstTextGone(elem) || this.isLastTextGone(elem);
  },
};
