import img1 from '../public/img24.jpeg'
import img2 from '../public/img23.jpeg'
import img3 from '../public/chair.png'
import disp from '../public/4.png'

import transitionEffect from './transition-effect'

const app = document.getElementById('app') as HTMLElement
const myAnimtaion = transitionEffect({
  parent: app,
  images: [img1, img2, img3],
  displacementImage: disp,
  easing: 'expo.out',
  speed: 1.2,
  intensity: -0.65,
})

app.addEventListener('click', () => {
  myAnimtaion.next()
})
