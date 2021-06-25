import Navigationbar from "../components/Navigationbar"
import Footer from "../components/Footer"

export default function Layout({ children }) {
  return (
    <>
    <Navigationbar />
    <div className="content">
        { children }
    </div>
    <Footer />
    </>
  )
}
