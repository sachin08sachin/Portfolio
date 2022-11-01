import React from 'react'
import"./work.css"


import { BsFillCameraVideoFill ,BsFillEyeFill,BsGithub} from 'react-icons/bs';

export const Work = () => {
    const project=[{
        img:"https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg",
        name:"NIKE",
        discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
        tech:"HTML,CSS,JAVASCRIPT",
        linked:"https://www.udemy.com/",
        fachebook:"",
        github:"https://github.com/"
        
          },{
            img:"https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg",
            name:"NIKE",
            discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
            tech:"HTML,CSS,JAVASCRIPT,CHAKRE UI,REACT",
            linked:"",
            fachebook:"",
            github:""
            
              },{
                img:"https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg",
                name:"NIKE",
                discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
                tech:"HTML,CSS,JAVASCRIPT,CHAKRE UI,REACT",
                linked:"",
                fachebook:"",
                github:""
                
                  },{
                    img:"https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg",
                    name:"NIKE",
                    discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
                    tech:"HTML,CSS,JAVASCRIPT,CHAKRE UI,REACT",
                    linked:"",
                    fachebook:"",
                    github:""
                    
                      },{
                        img:"https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg",
                        name:"NIKE",
                        discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
                        tech:"HTML,CSS,JAVASCRIPT,CHAKRE UI,REACT",
                        linked:"",
                        fachebook:"",
                        github:""
                        
                          },{
                            img:"https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg",
                            name:"NIKE",
                            discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
                            tech:"HTML,CSS,JAVASCRIPT,CHAKRE UI,REACT",
                            linked:"",
                            fachebook:"",
                            github:""
                            
                              },{
                                img:"https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg",
                                name:"NIKE",
                                discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
                                tech:"HTML,CSS,JAVASCRIPT,CHAKRE UI,REACT",
                                linked:"",
                                fachebook:"",
                                github:""
                                
                                  },{
                                    img:"https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg",
                                    name:"NIKE",
                                    discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
                                    tech:"HTML,CSS,JAVASCRIPT,CHAKRE UI,REACT",
                                    linked:"",
                                    fachebook:"",
                                    github:""
                                    
                                      },{
                                        img:"https://blendermedia.com/wp-content/uploads/2016/07/July12_banner.jpg",
                                        name:"NIKE",
                                        discription:"Entirely for Free! Start with a Template then Add Your Favorite Features. Get Free Web Hosting. Access 24/7 Customer Support. Use Tools to Help You Grow Online!",
                                        tech:"HTML,CSS,JAVASCRIPT,CHAKRE UI,REACT",
                                        linked:"",
                                        fachebook:"",
                                        github:""
                                        
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
<button><BsFillCameraVideoFill size={"1.5rem"}/></button>
  <button><BsFillEyeFill size={"1.5rem"}/></button>
  <button><BsGithub size={"1.5rem"}/></button>
</div>
  </div>
))}
</div>

</div>
    </div>
  )
}