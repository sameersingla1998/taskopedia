import logo from "../images/react.png"
function MainHeader(){
    return(
        <div className="pt-3 pl-2" style={{backgroundColor:"black"}}>
            <img src={logo} style={{height:"35px", verticalAlign:"top"}}></img>
            <span className="h2 pt-4 text-white-50">React Course - TaskOPedia </span>
        </div>
    )
  }
  const subHeaderStyle={
    color:"bluevolet",
    backgroundColor:"lightgray"
  }
  
  function SubHeader(){
    return(<p style={subHeaderStyle}>This will be an exciting course.</p>)
  }
  
  function Header(){
    return(
      <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
      </div>
    )
  }
export default Header;  