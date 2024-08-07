
    function openModal() {
      const modal = document.getElementById('myModal');
      modal.classList.remove('hidden');
      setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
      }, 10); // Timeout to allow for reflow
    }

    function closeModal() {
      const modal = document.getElementById('myModal');
      modal.classList.remove('opacity-100');
      modal.classList.add('opacity-0');
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 500); // Match the duration of the transition
    }


const youtube = document.querySelector(".youtube")
const whatsapp = document.querySelector(".whatsapp")
const github = document.querySelector(".github")


youtube.addEventListener("click", (e)=> {
  e.preventDefault()
  window.location.href = "https://www.youtube.com/@Bridgefrancisco"
})


whatsapp.addEventListener("click", (e)=> {
  e.preventDefault()
  window.location.href = "http://wa.me/+244945187055"
})

github.addEventListener("click", (e)=> {
  e.preventDefault()
  window.location.href = "https://github.com/Franciscobridge"
})