import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }
  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render called");
    return (
      <div className="about">
        <h1>About</h1>
        <h2>FoodHub</h2>
        <UserClass name={"first"} />
        <UserClass name={"second"} />
        <UserClass name={"third"} />
      </div>
    );
  }
}

export default About;
