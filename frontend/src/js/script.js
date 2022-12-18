const url = "http://localhost:5500/api";

// Função para vizualizar os dados da api
function getUsers() {
      axios.get(url)
            .then(response => {
                  apiResult.textContent = JSON.stringify(response.data)
            }).catch(err => console.log(err));
}

// Função para enviar dados para API
function addNewUser(newUser) {
      axios.post(url, newUser
             )
            .then(response => {
                  console.log(response)
            })
            .catch(err => console.log(err))
}

// getUsers();
const newUser = {
      name: "John Ranzor",
      avatar: "https://www.picsim.photos/200/300",
      city: "Brasilia"
}
addNewUser();


//Buscar apenas um usuario e exibilo no html
function getUser(id) {
      axios.get(`${url}/${id}`)
            .then(response => {
                  const data = response.data;

                  userName.textContent = data.name
                  userCity.textContent = data.city
                  userID.textContent = data.id;
                  userAvatar.src = data.avatar
            })
            .catch(error => console.log(error))
}
// getUser(1);

// Modificar dados UPDATE
function updateUser(id, userUpdate) {
      axios.put(`${url}/${id}`, userUpdate)
            .then(response => console.log(response))
            .catch(error => console.log(error))
}

const userUpdate = {
      name: "Roberto Carlos",
      avatar: "https://www.picsim.photos/200/300",
      city: "Goias"
}

// updateUser(3, userUpdate)

// Deletar dados, DELETE

function deleteUser(id) {
      axios.delete(`${url}/${id}`)
            .then(
                  console.log(response)
            )
            .catch(error => console.log(error))
}
//deleteUser(3)

