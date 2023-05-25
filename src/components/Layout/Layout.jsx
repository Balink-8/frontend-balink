import Sidebar from "../Sidebar/Sidebar"

const Layout = () => {
    return(
        <>
            <div>
                <div className="col-3 position-fixed">
                    <Sidebar />
                </div>
            </div>
        </>
    )
}

export default Layout