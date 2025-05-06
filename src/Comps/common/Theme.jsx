const Theme = ({ handleTheme, mode }) => {
  return (
    <div className="theme-wrapper" onClick={() => handleTheme(!mode)}>
        {mode ? <span>☀️</span> : <span>🌑</span>}
    </div>
  )
}

export default Theme