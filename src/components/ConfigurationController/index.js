// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = event => {
        console.log(event.target.checked)
        onToggleShowContent(event.target.checked)
      }

      const onChangeShowLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeShowRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="configurationControllerMain">
          <h1 className="configurationControllerHeading">Layout</h1>
          <div className="inputContainer">
            <input
              type="checkbox"
              checked={showContent}
              onChange={onChangeShowContent}
              id="contentInput"
              className="input"
            />
            <label htmlFor="contentInput" className="inputLabel">
              Content
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="checkbox"
              checked={showLeftNavbar}
              onChange={onChangeShowLeftNavbar}
              id="leftNavBarInput"
              className="input"
            />
            <label htmlFor="leftNavBarInput" className="inputLabel">
              Left Navbar
            </label>
          </div>

          <div className="inputContainer">
            <input
              type="checkbox"
              checked={showRightNavbar}
              onChange={onChangeShowRightNavbar}
              id="rightNavBarInput"
              className="input"
            />
            <label htmlFor="rightNavBarInput" className="inputLabel">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
