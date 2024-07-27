import Link from "next/link";
import { Button }  from "./ui/button"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
         <Link href="/">
         <h1 className="text-4xl font-semibold">
           Hibban <span className="text-accent ">.</span>
         </h1>
         </Link>
         {/* desktop nav & hire me button */}
         <div className="hidden xl:flex items-center gap-8"></div>
         <Nav/>
         <Link href = "/contact">
            <Button> Hire me </Button>
         </Link>
        </div>

         {/* Mobile Nav */}
         <div className="xl hidden"> Movile nav </div>

    </header>
  )
}

export default Header