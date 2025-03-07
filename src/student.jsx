// import {faker} from '@faker-js/faker'
function Student(props){
    return(
      <div className="col-4 p-1">
        <div className="row border">
          <div className="col-2">
            <img src={props.headshot} className="w-100"></img>
          </div>
          <div className="col-10">
            {props.name}<br/>
            Coding Experience {props.experience} years
          </div>
          </div>
      </div>
    )
  }
export default Student;