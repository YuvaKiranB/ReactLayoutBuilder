import {Component} from 'react'
import ConfigurationContext from './context/ConfigurationContext'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = activeState => {
    this.setState({showContent: activeState})
  }

  onToggleShowLeftNavbar = activeState => {
    this.setState({showLeftNavbar: activeState})
  }

  onToggleShowRightNavbar = activeState => {
    this.setState({showRightNavbar: activeState})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="main">
          <div className="content">
            <ConfigurationController />
            <Layout />
          </div>
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
