const Theme = ({ handleTheme, mode }) => {
  return (
    <div className="theme-wrapper" onClick={() => handleTheme(!mode)}>
        {mode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
    </div>
  )
}

export default Theme