const url = 'https://randomuser.me/api/1.3'


async function getUser() {
    const data = await fetch(url)
    .then(response => response.json())
    .catch((error) => {
        console.log(error)
      })

      return(data.results[0])
}


async function User() {
    const user = await getUser()
    const { gender, name, phone, email, picture }  = user  
    
    console.log(gender, name.first, name.last, phone, email, picture.medium)
}
   