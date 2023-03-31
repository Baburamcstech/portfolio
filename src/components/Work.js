import "./WorkCardStyle.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData"
import  React,{Component} from 'react'

class Work extends Component {
    render() {
  return (
    <div className="work-container">
       <h1 className="project-heading">Projects</h1> 
       <div className="project-container">
        {WorkCardData.map((val,ind)=>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val.imagesrc}
                title={val.title}
                text={val.text}
                view={val.view}/>
            );
        })}
      
       </div>
    </div>
  )
    }
}

export default Work