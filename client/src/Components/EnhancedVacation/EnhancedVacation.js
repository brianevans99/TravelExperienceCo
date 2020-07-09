import React, { Component } from 'react'

class EnhancedVacation extends Component {
  componentDidMount() {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
  render() {
    return <div className='bg-black text-white w-full'></div>
  }
}
export default EnhancedVacation
