import React , {Component} from 'react';
import PROJECTS from './data/projects';


class Project extends Component{
    render()
    {
        //console.log(this.props);
        const {title, image, description} =this.props.project;
        return(
        <div style={{display:'inline-block',margin:20}}>
            <h6>{title}</h6>
            <img src={image} alt="profile" style={{ width:120, height:120}}/>
            <p>{description}</p>
        </div> 
        )
    }
}


class Projects extends Component{

   render()
   {
       return(
            <div>
            {
            PROJECTS.map(PROJECT=>{
                return(
                    <Project key={PROJECT.id} project={PROJECT}/>
                );
            })
            }
            </div> 
       )
   }
}
export default Projects;