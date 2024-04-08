export default class DOMmanager {
  constructor(rootElem, { cssGap }) {
    this.groupsContainer = document.createElement('div');
    this.initialGroup = null;
    this.root = rootElem;

    this.root.classList.add('tape-screen');
    this.groupsContainer.style.setProperty('--gap', cssGap);
  }

  init() {
    // Create init group
    this.initialGroup = this.#initGroup();

    // Insert groups in common container (moveable)
    this.groupsContainer.className = 'positioned-tape';
    this.groupsContainer.dataset.x = 0;
    this.groupsContainer.append(this.initialGroup);

    this.root.append(this.groupsContainer);
  }

  #initGroup() {
    const elements = [...this.root.children];

    const group = document.createElement('div');
    group.className = 'group';
    this.root.append(group);

    group.append(...elements);
    return group;
  }

  fitScreen() {
    const screenWidth = this.root.offsetWidth;
    const lastGroup = this.groupsContainer.lastElementChild;

    const lastElemOffsetX = lastGroup.lastElementChild.offsetLeft;
    const hasEmptySpace = (lastElemOffsetX) => {
      return screenWidth - lastElemOffsetX > 0;
    };

    if (hasEmptySpace(lastElemOffsetX)) {
      const clone = lastGroup.cloneNode(true);
      this.groupsContainer.append(clone);

      this.fitScreen();
    } else {
      this.#generateSuperGroups();
    }
  }

  #generateSuperGroups() {
    // Wrap all children full-width-groups in one 'super-group'
    const superGroup = document.createElement('div');
    superGroup.className = 'super-group';

    const childGroups = this.groupsContainer.children;
    superGroup.append(...childGroups);

    const totalGroups = 3;
    // Insert duplicates of super-group
    for (let i = 1; i <= totalGroups; i++) {
      this.groupsContainer.append(superGroup.cloneNode(true));
    }
  }
}
