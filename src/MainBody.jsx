import Student from './student';
import { faker } from '@faker-js/faker';
export default function MainBody(){
    const whatwelearn="React JS"
    const lecturecount= "3"
    return(
      <div style={{minHeight:"70vh"}}>
        <p>In this Course we will learn {whatwelearn} by building Taskopedia!
          <br></br>
          Total Lecture -{lecturecount}
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and CLass Components</li>
        </ul>
        <div className="container row">Students Enrolled</div>
        <Student experience={2} name="Kris Walley" headshot="faker.image.avatar()"/>
        <Student experience={5} name="Angel Patrice" headshot="faker.image.avatar()"/>
        <Student experience={3} name="Rene Parker" headshot="faker.image.avatar()"/>
      </div>
    );
  }