import './Preloader.scss'

function Preloader() {
  return (
    <>
    <div className="preloader">
    <svg width="159" height="104" viewBox="0 0 159 104" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M67.3077 2H5L23.4615 25.5294H51.1538V69.6471H23.4615L5 102H67.3077V2Z" fill="#C27E00"/>
    <path d="M85.7692 102V2H108.846L155 102H131.923L97.3077 25.5294L108.846 102H85.7692Z" fill="#C27E00"/>
    <path d="M155 2H131.923L155 54.9412V2Z" fill="#C27E00"/>
    <path d="M67.3077 2H5L23.4615 25.5294H51.1538V69.6471H23.4615L5 102H67.3077V2Z" stroke="#FFA500" stroke-width="3.95833"/>
    <path d="M85.7692 102V2H108.846L155 102H131.923L97.3077 25.5294L108.846 102H85.7692Z" stroke="#FFA500" stroke-width="3.95833"/>
    <path d="M155 2H131.923L155 54.9412V2Z" stroke="#FFA500" stroke-width="3.95833"/>
    </svg>

    <p id='preparagraph'>James Ng'ang'a Architecture.</p>
    </div>
    </>
  )
}

export default Preloader