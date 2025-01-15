function isEnglishPath() {
  return window.location.pathname.startsWith("/en/");
}

const menuItems = [
  { label: "ESCRITÓRIO", link: "#como-atuamos" },
  { label: "EQUIPE", link: "#equipe" },
  { label: "PUBLICAÇÕES", link: "#publicacoes" },
  { label: "CONTATO", link: "#contato" },
];

function createMenu(containerId, items) {
  const container = document.getElementById(containerId);

  const menu = document.createElement("div");
  menu.id = "menu";

  const logoBlock = document.createElement("div");
  logoBlock.className = "logo-block";

  const logoItem = document.createElement("div");
  logoItem.className = "logo";
  const logoLink = document.createElement("a");
  logoLink.href = "/";
  const logoImg = document.createElement("img");
  logoImg.src = "img/logoAdv.svg";
  logoImg.alt = "Logo da empresa";
  logoImg.style.height = "96px";
  logoLink.appendChild(logoImg);
  logoItem.appendChild(logoLink);
  logoBlock.appendChild(logoItem);

  // Segundo bloco: Itens do menu
  const itemsBlock = document.createElement("div");
  itemsBlock.className = "items-block";

  const menuList = document.createElement("ul");

  items.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.className = "menu-item";
    menuItem.textContent = item.label;
    menuItem.onclick = () => {
      window.location.href = item.link;
    };
    menuList.appendChild(menuItem);
  });

  const linkedinItem = document.createElement("li");
  linkedinItem.className = "linkedin-logo";
  const linkedinLink = document.createElement("a");
  linkedinLink.href =
    "https://www.linkedin.com/company/peret-e-barros-advogados/";
  linkedinLink.target = "_blank";
  const linkedinImg = document.createElement("img");
  linkedinImg.src = "img/linkedin.svg";
  linkedinImg.alt = "LinkedIn";
  linkedinImg.style.height = "35px";
  linkedinLink.appendChild(linkedinImg);
  linkedinItem.appendChild(linkedinLink);
  menuList.appendChild(linkedinItem);

  const ptItem = document.createElement("li");
  ptItem.className = "pt";
  const ptLink = document.createElement("a");
  ptLink.href = "#";
  ptLink.textContent = "PT";
  ptLink.onclick = () => {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith("/en/")) {
      window.location.href = currentPath.replace("/en/", "/");
    } else {
      window.location.href = currentPath;
    }
  };
  ptItem.appendChild(ptLink);
  menuList.appendChild(ptItem);

  const enItem = document.createElement("li");
  enItem.className = "en";
  const enLink = document.createElement("a");
  enLink.href = "#";
  enLink.textContent = "EN";
  enLink.onclick = () => {
    const currentPath = window.location.pathname;
    if (!currentPath.startsWith("/en/")) {
      window.location.href = `/en${currentPath}`;
    }
  };
  enItem.appendChild(enLink);
  menuList.appendChild(enItem);

  itemsBlock.appendChild(menuList);

  menu.appendChild(logoBlock);
  menu.appendChild(itemsBlock);

  container.appendChild(menu);
}

createMenu("menu-container", menuItems);
