import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + " child constructor");
  }
  componentDidMount() {
    console.log(this.props.name + "child component did mount");
  }
  render() {
    console.log(this.props.name + "child rendered");
    const { count } = this.state;
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
      </div>
    );
  }
}
export default UserClass;
