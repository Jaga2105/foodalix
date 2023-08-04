import ProfileClass from "./ProfileClass";
// import BlogClass from "./BlogClass";
import {Component} from 'react'; /* One way to import named import - Component from React library */
import { GITHUB_USER_NAME, GITHUB_BLOG_NAME } from "../config";
class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {
  
  }

  render() {
    

    return (
      <div className="container flex justify-around mob:flex-col">
        <div className="card-container w-[70%] h-2/4 mob:w-auto">
          <h1 className="card-container-title">About Me</h1>
          <ProfileClass name={GITHUB_USER_NAME}/>  
        </div>
      </div>
    )
  }
}

export default About;