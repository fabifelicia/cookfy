const URL = 'https://randomuser.me/api/1.3'

const modal1 = document.querySelector('.images-section .modal')
const modal2 = document.querySelector('.container .modal')
const plate1 = document.querySelector('.food-plate-1')
const plate2 = document.querySelector('.food-plate-2')


plate1.addEventListener('mouseover', () => {
    modal1.classList.add('active')
})

plate1.addEventListener('mouseout', () => {
    modal1.classList.remove('active')
})

plate2.addEventListener('mouseover', () => {
    modal2.classList.toggle('active')
})

plate2.addEventListener('mouseout', () => {
    modal2.classList.toggle('active')
})

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
    
    
    console.log(gender, name.last, phone, email)
}
   
User()

