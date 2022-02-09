const URL = 'https://randomuser.me/api/1.3'

const loginUser = (name) => {
    const nameAvatar = document.querySelector('.name-avatar')    
    nameAvatar.innerText = name
}

const photo= (avatar) => {
    const photoProfile = document.querySelector('.avatar')
    photoProfile.src = avatar
}

async function getUser() {
    const data = await fetch(URL)
    .then(response => response.json())
    .catch((error) => {
        console.log(error)
      })

      return(data.results[0])
}


async function User() {
    const user = await getUser()
    const { gender, name, phone, email, picture }  = user 
    
    loginUser(name.first)
    photo(picture.thumbnail)

    
    
    
    console.log(gender, name.last, phone, email, picture.medium)
}
   
User()

