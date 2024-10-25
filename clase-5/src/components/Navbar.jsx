const LINKS = [
  { href:"/", text:"Home"},
  { href:"/about", text:"About"},
  { href:"/contact", text:"contact"},
  { href:"/login", text:"login"},
  { href:"/register", text:"register"},
  { href:"/dashboard", text:"dashboard"},
]



 const Navbar = () => {
  return (
    <nav>
      <ul>
        {LINKS.map((link)=>(
          <li key={link.text}>
            <a href={link.href}>{link.text} </a>
          </li>
        ))}
      </ul>
    </nav>
    )
}

export default Navbar