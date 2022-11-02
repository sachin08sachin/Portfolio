import React from 'react'
import"./work.css"


import { BsFillCameraVideoFill ,BsFillEyeFill,BsGithub} from 'react-icons/bs';

export const Work = () => {
    const project=[{
        img:"./assets/E-commerce_Amazon1e.png",
        name:"E-Commerce Amazon_Clone",
        discription:"This E-commerce website is clone of Amazon, here I get data from backend and done some functionalities in frontend ",
        tech:"HTML,CSS,Bootstrap,JS,React,NodeJs,ExpressJs",
        linked:"",
        fachebook:"",
        github:"https://github.com/sachin08sachin/E-commerce_Amazon"
        
          },{
            img:"./assets/BMI-calci1e.png",
            name:"BMI-Calculator",
            discription:"In BMI calculator , after when we enter weight and height we get our BMI value with proper image",
            tech:"HTML,CSS,JAVASCRIPT,React",
            linked:"",
            fachebook:"",
            github:"https://github.com/sachin08sachin/BMI-Calculator"
            
              },{
                img:"./assets/keeperapp1e.png",
                name:"Keeper_App(Google)-Clone",
                discription:"In keeper App, we can able to add notes using hooks and update the number of notes in screen and we can delete the notes",
                tech:"HTML,CSS,JAVASCRIPT,REACT",
                linked:"",
                fachebook:"",
                github:"https://github.com/sachin08sachin/keeperapp"
                
                  },{
                    img:"./assets/netmedsclone.png",
                    name:"Netmeds_Clone",
                    discription:"In Netmeds clone, i implemented some functionalities, labtest, beauty,and we can order products to get in cart(add to cart)",
                    tech:"HTML,CSS,JAVASCRIPT",
                    linked:"",
                    fachebook:"https://bucolic-gaufre-2d43ce.netlify.app",
                    github:"https://github.com/DeveloperShubhamKapoor/Netmeds-clone"
                    
                      },{
                        img:"./assets/uboric1e.png",
                        name:"Uboric_Clone",
                        discription:"In this website, I had done using some functionality and we can order domestic products, sigin and signup and we can add products to our cart",
                        tech:"HTML,CSS,JAVASCRIPT",
                        linked:"",
                        fachebook:"https://zesty-horse-6e7f7f.netlify.app/",
                        github:"https://github.com/VaibhavTyagi010/UboricWebsite-clone"
                        
                          },{
                            img:"./assets/RollDice1e.png",
                            name:"Dice_Challenge",
                            discription:"In this we can able to edit player name and I had used some functionality and hooks.when we click on button it shows winner in the screen.",
                            tech:"HTML,CSS,JAVASCRIPT",
                            linked:"",
                            fachebook:"https://heartfelt-pithivier-596d9a.netlify.app/",
                            github:"https://github.com/sachin08sachin/Dice-Game"
                            
                              },{
                                img:"./assets/Ford_CSS1e.png",
                                name:"FORD",
                                discription:"In FORD landing page,I used CSS animation to move the car initially and some hover effect in button and some animation when page gets refresh.",
                                tech:"HTML,CSS",
                                linked:"",
                                fachebook:"https://effervescent-dodol-8ec27f.netlify.app/",
                                github:"https://github.com/sachin08sachin/HTML_CSS-Animation"
                                
                                  },{
                                    img:"./assets/weather_backend1e.png",
                                    name:"Weather_App",
                                    discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
                                    tech:"HTML,CSS,JAVASCRIPT,React,Nodejs,ExpessJs",
                                    linked:"",
                                    fachebook:"",
                                    github:"https://github.com/sachin08sachin/weather_backend"
                                    
                                      },{
                                        img:"./assets/Digitalclock1e.png",
                                        name:"NIKE",
                                        discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
                                        tech:"HTML,CSS,JAVASCRIPT,CHAKRE UI,REACT",
                                        linked:"",
                                        fachebook:"",
                                        github:"https://github.com/sachin08sachin/Digital_Clock"
                                        
                                          }
        
        ]
  return (
    <div>
       
<div className='work-container' id='work'>

<div>

<span> <h1>My Creative Portfolio Section</h1>
</span>
</div>
  

<div className='work-grid'>

{project.map((e)=>(

  <div className='work-grid-div'>

   <img src={e.img} alt="" />
   <div className='grid-innersection'>
<h3>{e.name}</h3> <br />
<h4>discrption: </h4>{e.discription}
  <br />
<h4>Tech :</h4>{e.tech}
</div>
<div className='work-div-button'>
<a href={e.linked} ><button><BsFillCameraVideoFill size={"1.5rem"}/></button></a>
 <a href={e.fachebook} > <button><BsFillEyeFill size={"1.5rem"}/></button></a>
 <a href={e.github}> <button><BsGithub size={"1.5rem"}/></button></a>
</div>
  </div>
))}
</div>

</div>
    </div>
  )
}