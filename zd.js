const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

function openZendeskForm(formName) {
  // substitua "seu_subdominio" pelo subdomínio da sua conta do Zendesk
  var zendeskUrl =
    "https://static.zdassets.com/admin/contributor/admin_center_framework_web_widget/015183add2341b0e06d23e3d792c758d66fe1093/05595a2b304b40283e4ae32e4d7f3795.html#key=2ba68387-ce74-4b23-8aa9-7f3448b2f74c&instructions=Salve+suas+altera%C3%A7%C3%B5es+para+v%C3%AA-las+aqui.+Eles+podem+demorar+um+pouco+para+aparecer.&dir=ltr&locale=pt-br&hasCustomLauncher=false&customLauncherOpen=Abrir+Web+Widget&title=SUPORTE+-+B2C";

  switch (formName) {
    case "equipamentos":
      var formId = "360000123456"; // substitua pelo ID do formulário de Equipamentos
      break;
  }

  var formUrl = zendeskUrl + "/hc/requests/new?ticket_form_id=" + formId;

  // obter o elemento iframe da seção home
  var iframe = document.createElement("iframe");
  iframe.src = formUrl;
  iframe.style.width = "100%";
  iframe.style.height = "100%";

  // remover qualquer conteúdo existente na seção home
  var homeSection = document.querySelector(".home");
  homeSection.innerHTML = "";

  // adicionar o iframe à seção home
  homeSection.appendChild(iframe);
}

// ouça os eventos de clique em cada link e abra o formulário correspondente
document
  .getElementById("equipamentos-link")
  .addEventListener("click", function () {
    openZendeskForm("equipamentos");
  });

document.getElementById("suporte-link").addEventListener("click", function () {
  openZendeskForm("suporte");
});

document
  .getElementById("atendimentos-link")
  .addEventListener("click", function () {
    openZendeskForm("atendimentos");
  });

document
  .getElementById("financeiro-link")
  .addEventListener("click", function () {
    openZendeskForm("financeiro");
  });

document.getElementById("anomalia-link").addEventListener("click", function () {
  openZendeskForm("anomalia");
});
