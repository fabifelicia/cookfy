// Images events - modal
const modal1 = document.querySelector('.modal-ceviche')
const modal2 = document.querySelector('.container .modal')
const plate1 = document.querySelector('.ceviche-plate')
const plate2 = document.querySelector('.food-plate-2')

const iconFb = document.querySelector('.facebook')
const iconIg = document.querySelector('.instagram')
const iconTwitter = document.querySelector('.twitter')
const iconLinkedin = document.querySelector('.linkedin')
const iconPinterest = document.querySelector('.pinterest')

iconFb.addEventListener('mouseover', () => {
  document.querySelector('.facebook').src = './assets/Fb_active.svg'
})

iconFb.addEventListener('mouseout', () => {
  document.querySelector('.facebook').src = './assets/Fb.svg'
})

iconPinterest.addEventListener('mouseover', () => {
  document.querySelector('.pinterest').src = './assets/Pinterest_active.svg'
})

iconPinterest.addEventListener('mouseout', () => {
  document.querySelector('.pinterest').src = './assets/Pinterest.svg'
})

iconIg.addEventListener('mouseover', () => {
  document.querySelector('.instagram').src = './assets/IG_active.svg'
})

iconIg.addEventListener('mouseout', () => {
  document.querySelector('.instagram').src = './assets/IG.svg'
})

iconTwitter.addEventListener('mouseover', () => {
  document.querySelector('.twitter').src = './assets/Twitter_active.svg'
})

iconTwitter.addEventListener('mouseout', () => {
  document.querySelector('.twitter').src = './assets/Twitter.svg'
})

iconLinkedin.addEventListener('mouseover', () => {
  document.querySelector('.linkedin').src = './assets/Linkedin_active.svg'
})

iconLinkedin.addEventListener('mouseout', () => {
  document.querySelector('.linkedin').src = './assets/Linkedin.svg'
})

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

document.querySelector('.btn-circle-right').addEventListener('mouseover', () => {
  document.querySelector('.arrow-active-right').src = '../assets/Seta_direita_branca.svg'
})

document.querySelector('.btn-circle-right').addEventListener('mouseout', () => {
  document.querySelector('.arrow-active-right').src = '../assets/Seta_direita.svg'
})

document.querySelector('.btn-circle-left').addEventListener('mouseover', () => {
  document.querySelector('.arrow-active-left').src = '../assets/Seta_esquerda_branca.svg'
})

document.querySelector('.btn-circle-left').addEventListener('mouseout', () => {
  document.querySelector('.arrow-active-left').src = '../assets/Seta_esquerda.svg'
})


//Buttons events

const [btnCook, btnPatisserie, btnDrinks] = document.querySelectorAll('.food-classification-2 button')


btnCook.addEventListener('mouseover', () => {
  document.getElementById('cook').src = './assets/Cozinha_active.svg'
  document.getElementById('cook-name').style.color = '#e82147'
})

btnCook.addEventListener('mouseout', () => {
  document.getElementById('cook').src = './assets/Cozinha.svg'
  document.getElementById('cook-name').style.color = '#a19b9b'
})

btnCook.addEventListener('click', () => {
  document.querySelector('.world-food-plate').src = './assets/images/Cozinha.jpg'
})

btnPatisserie.addEventListener('mouseover', () => {
  document.getElementById('patisserie').src = './assets/Patisserie_active.svg'
  document.getElementById('patisserie-name').style.color = '#e82147'
})

btnPatisserie.addEventListener('mouseout', () => {
  document.getElementById('patisserie').src = './assets/Patisserie.svg'
  document.getElementById('patisserie-name').style.color = '#a19b9b'
})

btnPatisserie.addEventListener('click', () => {
  document.querySelector('.world-food-plate').src = './assets/images/sebastian-coman-photography-dacM7egRw0Y-unsplash.png'

})

btnDrinks.addEventListener('mouseover', () => {
  document.getElementById('drinks').src = './assets/Drinks_active.svg'
  document.getElementById('drinks-name').style.color = '#e82147'
})

btnDrinks.addEventListener('mouseout', () => {
  document.getElementById('drinks').src = './assets/Drinks.svg'
  document.getElementById('drinks-name').style.color = '#a19b9b'
})

btnDrinks.addEventListener('click', () => {  
  document.querySelector('.world-food-plate').src = './assets/images/Drink.jpg'
})

//api events

const URL = 'https://randomuser.me/api/1.3'

const loginUser = (name) => {
  const nameAvatar = document.querySelector('.name-avatar')
  nameAvatar.innerText = name
}

const nameUser = (name, surname) => {
  const username = document.querySelector('.name')
  username.innerText = `${name} ${surname}`
}

const photo = (gender) => {
  const photoProfile = document.querySelector('.avatar')
  gender === 'male' ?
    photoProfile.src = '../assets/Avatar_masculino.svg' :
    photoProfile.src = '../assets/Avatar_feminino.svg'
}

async function getUser() {
  const data = await fetch(URL)
    .then(response => response.json())
    .catch((error) => {
      console.log(error)
    })

  return (data.results[0])
}

async function User() {
  const user = await getUser()
  const { gender, name, phone, email } = user

  loginUser(name.first)
  nameUser(name.first, name.last)
  photo(gender)
}

User()

