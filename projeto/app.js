fetch('https://github.com/Arthurmopa')
  .then(response => response.json())
  .then(data => {
    // Manipule os dados do perfil do GitHub aqui
    exibirPerfil(data);
  })
  .catch(error => {
    console.log('Ocorreu um erro:', error);
  });

function exibirPerfil(data) {
  // Acessar os dados do perfil e exibi-los no seu site
  const profileDiv = document.getElementById('github-profile');
  profileDiv.innerHTML = `
    <h2>${data.name}</h2>
    <img src="${data.avatar_url}" alt="Avatar do GitHub">
    <p>${data.bio}</p>
    <p>Repositórios públicos: ${data.public_repos}</p>
    <p>Seguidores: ${data.followers}</p>
  `;
}


//Não deu certo usar o "fetch" professora 😓
