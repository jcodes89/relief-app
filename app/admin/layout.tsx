import AdminNavbar from "../components/AdminNavbar/AdminNavbar";


export default function AdminLayout({children}){
    return(
      <>
        <nav>
          <AdminNavbar/>
        </nav>
      <div className="">
        <main className="w-max">
          Admin
        </main>
        <aside className="bg-slate-400 p-5 mr-5">
          {children}
        </aside>
      </div>
      
      </>
    
    )
}