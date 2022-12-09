/* --------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
/* NAVBAR -------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
window.addEventListener("load", function () {
  initHeader();

});

function initHeader() {
  initTopBar();
  initMenu();
}


// Barra superior
function initTopBar() {
  const translateElement = document.querySelector(".idioma-icon-barra-superior-govco");
  translateElement.addEventListener("click", translate, false);

  function translate() {
    // ... // Implementar traducción
  }
}


// Menu de navegacion
function initMenu() {
  initSearchBar();

  /////// Prevent closing from click inside dropdown
  document.querySelectorAll('.dropdown-menu').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  });

  document.querySelectorAll('.navbar-menu-govco a.dir-menu-govco').forEach(function (element) {
    element.addEventListener("click", eventClickItem, false);
  });
}

function eventClickItem() {
  const parentNavbar = this.closest('.navbar-menu-govco');
  parentNavbar.querySelectorAll('a.active').forEach(function (element) {
    element.classList.remove('active');
  });

  this.classList.add('active');
  const container = this.closest('.nav-item');
  const itemParent = container.querySelector('.nav-link');
  itemParent.classList.add('active');
}


// Buscador
function methodAssign(event, method, elements) {
  for (let i of elements) {
    i.addEventListener(event, method, false);
  }
}

function initSearchBar() {
  const inputSearch = document.querySelectorAll(".input-search-govco:not(.noActive)");
  getElementInputSearchBar(inputSearch);
  methodAssign("keyup", activeInputSearchBar, inputSearch);
  methodAssign("keydown", keydownInputSearchBar, inputSearch);
  methodAssign("blur", blurInputSearchBar, inputSearch);
  methodAssign("focus", focusInputSearchBar, inputSearch);

  const buttonClean = document.querySelectorAll(".search-govco .icon-close-search-govco");
  methodAssign("click", cleanInputSearchBar, buttonClean);
  methodAssign("blur", blurcleanInputSearchBar, buttonClean);
}

function getElementInputSearchBar(elements) {
  for (let i of elements) {
    assignFunctionItemsSearchBar(i);
  }
}

function activeInputSearchBar(element) {
  const parent = element.target.parentNode;
  const existsClass = parent.classList.contains('active');
  if (element.target.value === '') {
    parent.classList.remove('active', 'exist-content');
  } else if (!existsClass) {
    parent.classList.add('active', 'exist-content');
  }
}

function assignFunctionItemsSearchBar(input) {
  const parentInput = input.parentNode;
  const parentItems = parentInput.nextElementSibling;
  const items = parentItems.querySelectorAll("ul li a");

  for (let item of items) {
    item.addEventListener("keydown", function (event) {
      keysUpDownSearchBar(event, parentItems, input);
    });

    item.addEventListener("blur", function () {
      const elementI = item.parentNode
      const elementU = elementI.parentNode
      const elementDivOptions = elementU.parentNode
      const elementDivContainerOptions = elementDivOptions.parentNode;
      const elementDivContainerSearch = elementDivContainerOptions.previousElementSibling;
      existFocusContainerSearchBar(elementDivContainerSearch);
    });

    item.addEventListener("click", function () {
      input.value = '';
      parentInput.classList.remove('active', 'exist-content');
    });
  }
}

function keydownInputSearchBar(element) {
  const parentInput = this.parentNode;
  const parentItems = parentInput.nextElementSibling;
  const parentUl = parentItems.querySelector('.options-search-govco');

  if (parentUl) {
    parentUl.onscroll = function () {
      const visibleItems = this.querySelectorAll("li a");
      if (document.activeElement == visibleItems[0]) {
        this.scrollTop = 0;
      }
    };
    keysUpDownSearchBar(element, parentItems, this);
  }
}

function keysUpDownSearchBar(e, container, input) {
  // Key up
  if (e.which == 38) {
    upSearchBar(container, input);
  }
  // Key down
  if (e.which == 40) {
    downSearchBar(container, input);
  }
}

function downSearchBar(container, input) {
  const active = document.activeElement;
  const items = container.querySelectorAll("li a");
  if (active === input) {
    items[0].focus();
  } else {
    for (let i = 0; i < items.length - 1; i++) {
      if (active === items[i]) {
        items[i + 1].focus();
      }
    }
  }
}

function upSearchBar(container, input) {
  const active = document.activeElement;
  const itemsList = container.querySelectorAll("li:not(.none) a");
  if (active === itemsList[0]) {
    input.focus();
  } else {
    for (let i = 1; i < itemsList.length; i++) {
      if (active === itemsList[i]) {
        itemsList[i - 1].focus();
      }
    }
  }
}

function cleanInputSearchBar() {
  const input = this.previousElementSibling;
  const parent = this.parentNode;
  input.value = '';
  parent.classList.remove('active', 'exist-content');
  input.focus();
}

function blurInputSearchBar() {
  const parent = this.parentNode;
  existFocusContainerSearchBar(parent);
}

function existFocusContainerSearchBar(element) {
  setTimeout(() => {
    if (!element.parentNode.contains(document.activeElement)) {
      element.classList.remove('active');
    }
  }, 100);
}

function focusInputSearchBar(element) {
  activeInputSearchBar(element);
}

function blurcleanInputSearchBar() {
  const parent = this.parentNode;
  existFocusContainerSearchBar(parent);
}
/* --------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
/* END NAVBAR ---------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------- */