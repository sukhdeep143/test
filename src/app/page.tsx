import Link from "next/link";
import Header from "./components/Header"


export default function Home() {
  return (
   <div className="bg-slate-200 h-screen p-8">
    <Header />
    <h1>Home page..</h1>
    <Link href="./register">
    Register
    </Link>
   </div>
  );
}
