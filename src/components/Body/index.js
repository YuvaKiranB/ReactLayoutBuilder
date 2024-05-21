// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="bodyContainer">
          {showLeftNavbar && (
            <div className="leftNavbarContainer">
              <h2 className="leftNavbarHeading">Left Navbar Menu</h2>
              <ul className="leftNavbarUl">
                <li className="leftNavbarLi">Item1</li>
                <li className="leftNavbarLi">Item2</li>
                <li className="leftNavbarLi">Item3</li>
                <li className="leftNavbarLi">Item4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="contentContainer">
              <h2 className="contentHeading">Content</h2>
              <p className="contentPara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="rightNavbarContainer">
              <h2 className="rightNavbarHeading">Right Navbar</h2>
              <div className="rightNavbarContent">
                <div className="rightNavbarBox">Ad 1</div>

                <div className="rightNavbarBox">Ad 2</div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
