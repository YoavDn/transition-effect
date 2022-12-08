import img1 from '../public/img24.jpeg'
import img2 from '../public/img23.jpeg'
import disp from '../public/4.png'

import transitionEffect from "./transition-effect";

const app = document.getElementById('app') as HTMLElement
const myAnimtaion = transitionEffect({
    parent: app,
    image1: img1,
    image2: img2,
    displacementImage: disp,
    easing: 'expo.out',
    speed: 1.2,
    intensity: -0.65

})

app.addEventListener('mouseenter', () => {
    myAnimtaion.transitionIn()
})

app.addEventListener('mouseleave', () => {
    myAnimtaion.transitionOut()
})