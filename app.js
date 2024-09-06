function pesquisar() {
  // 1. Seleciona a seção HTML onde os resultados serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi retornado! Campo de busca vazio.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // 2. Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";
  let titulo = "";
  let caracteristica1 = "";
  let caracteristica2 = "";
  let caracteristica3 = "";
  // 3. Itera sobre cada objeto no array 'dados'.
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    caracteristica1 = dado.caracteristica1.toLowerCase();
    caracteristica2 = dado.caracteristica2.toLowerCase();
    caracteristica3 = dado.caracteristica3.toLowerCase();

    if (
      titulo.includes(campoPesquisa) ||
      caracteristica1.includes(campoPesquisa) ||
      caracteristica2.includes(campoPesquisa) ||
      caracteristica3.includes(campoPesquisa)
    ) {
      // 4. Cria uma nova div para cada resultado, formatando-a como HTML.
      resultados += `<div class="item-resultado">
        ${dado.titulo}
          <ul>
            <li>${dado.caracteristica1}</li>
            <li>${dado.caracteristica2}</li>
            <li>${dado.caracteristica3}</li>
            <li><a href="${dado.link}" target="_blank">Mais informações</a></li>
          </ul>
      </div>`;
    }

    if (!resultados) {
      resultados = "<p>Nada Encontrado!</p>";
    }

    // 5. Atribui o HTML gerado para a seção de resultados.
    section.innerHTML = resultados;
  }
}
