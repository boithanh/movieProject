import home from './component'
import './style.scss'
window.addEventListener('load', async ()=>{
  document.querySelector("body").innerHTML= await home();
  window.$('.venobox').venobox();
})
