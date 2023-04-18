import './navitems.css'



const NavItem = (props) => {
  return (
<li className='nav-item'>

    {props.children}
</li>
  )
}




// const NavItemDropDown = (props) => {
//     return (
//   <li><a className='nav-item'>
//   {props.children}
//   </a></li>
//     )
//   }

export default NavItem
// export {NavItemDropDown}