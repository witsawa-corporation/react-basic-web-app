import React from 'react'
import { Link } from "react-router-dom";
import Button from './Button'

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/about">
          <Button text="go to about" />
        </Link>
      </div>
    )
  }
}

export default HomePage
