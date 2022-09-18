import './Header.scss'

function Header() {
  return (
  <div className="nav">
        <svg width="68" height="36" viewBox="0 0 68 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29 1H2L10 9H22V24H10L2 35H29V1Z" fill="#C27E00"/>
        <path d="M37 35V1H47L67 35H57L42 9L47 35H37Z" fill="#C27E00"/>
        <path d="M67 1H57L67 19V1Z" fill="#C27E00"/>
        <path d="M29 1H2L10 9H22V24H10L2 35H29V1Z" stroke="#FFA500"/>
        <path d="M37 35V1H47L67 35H57L42 9L47 35H37Z" stroke="#FFA500"/>
        <path d="M67 1H57L67 19V1Z" stroke="#FFA500"/>
        </svg>

    </div>
  )
}


export default Header