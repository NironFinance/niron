import "./sidebar.css"

function Sidebar() {
    return (
        <>
            <div className="sidebar_Main">
                <h3><span className="piggy"> NIRON </span>FINANCE</h3>
               <div className="sidebar_inner">
               <a href="http://">  <i class="fas fa-home"></i>
                    <p>Stake NIRON</p></a> 
                </div>
                <div className="sidebar_last_div">
                    <hr className="hrColor" />
                    <div className="lastDiv_1">
                        <a href="https://t.me/NironOfficial"><i class="fab fa-telegram-plane"></i>
                            <p>Telegram</p></a>
                    </div>
                    <div className="lastDiv_1">
                    <a href="http://niron.finance/"> <i class="fab fa-twitter"></i>
                        <p>Website</p></a>
                    </div>
                    <hr className="hrColor" />
                </div>
            </div>
        </>
    )
}

export default Sidebar
{/* <i class="fab fa-twitter"></i> */ }
{/* <i class="fab fa-telegram-plane"></i> */ }