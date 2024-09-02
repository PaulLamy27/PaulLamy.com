import './App.css'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Intro from './intro/Intro'
import Tech from './components/Tech'
import ReactLogo from './assets/images/React.png'
// import Technology from "./types";

const bestTechnologiesTitle = "Best Technologies" as string;
const bestTechnologiesArray = [
  {imagePath: ReactLogo, description: "React"},
  {imagePath: "", description: "TypeScript"},
  {imagePath: "", description: "JavaScript"},
  {imagePath: "", description: "Node"},
  {imagePath: "", description: "C++"},
  {imagePath: "", description: "SQL"},
  {imagePath: "", description: "AWS"},
  {imagePath: "", description: "MongoDB"},
  {imagePath: "", description: "CSS"},
  {imagePath: "", description: "Tailwind"},
] as Technology[];

const alsoExperiencedTitle = "Also Experienced Using" as string;
const alsoExperiencedArray = [
  {imagePath: "", description:"Python"},
  {imagePath: "", description:"Java"},
  {imagePath: "", description:"C#"},
  {imagePath: "", description:"Linux"},
  {imagePath: "", description:"Firebase"},
  {imagePath: "", description:"Pandas"},
  {imagePath: "", description:"NumPy"},
  {imagePath: "", description:"TKinter"}] as Technology[];
const whatIHaveBeenDoingTitle = "What I Have Been Doing Recently" as string;
const whatIHaveBeenDoingArray = [
{imagePath: "", description: "Docker"},
{imagePath: "", description: ".NET"},
{imagePath: "", description: "NeoVim"},
{imagePath: "", description: "GraphQL"},
{imagePath: "", description: "Go"},
{imagePath: "", description: "Rust"},
{imagePath: "", description: "JavaScript Testing"},
{imagePath: "", description: "Data Science"}] as Technology[];

function App() {

  return (
    <>
      <div className="container">
        <div className="navbar"><Navbar /></div>
        <div className="hero"><Hero /></div>
        <div className="intro"><Intro /></div>
        <div className="tech">
          <Tech title={bestTechnologiesTitle} items={bestTechnologiesArray} />
          <Tech title={alsoExperiencedTitle} items={alsoExperiencedArray} />
          <Tech title={whatIHaveBeenDoingTitle} items={whatIHaveBeenDoingArray} />


        </div>

      </div>
    </>
  )
}

export default App
