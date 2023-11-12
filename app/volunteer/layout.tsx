import VolunteerNavbar from "../components/VolunteerNavbar/VolunteerNavbar";


export default function VolunteerLayout({children}){
    return(
        <html lang="en">
      <body>
        <VolunteerNavbar/>
        {children}
      </body>
    </html>
    )
}