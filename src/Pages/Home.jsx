import Bio from "../Comps/common/home/Bio"
import Projects from "../Comps/common/home/Projects"

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-left">
        <Bio />
      </div>
      <div className="home-right">
        <Projects />
      </div>
    </div>
  )
}

export default Home