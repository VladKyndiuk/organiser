import "./SideBar.css";
function SideBar() {
    return ( 
        <div class="sidebar">
            <div class="logo-details">
                <div class="logo_name">ORGANISER</div>
            </div>
            <ul>
                <li>
                    <a href="./index.html" class="nav_cell ">
                        <i class="icon_small fa-solid fa-hands"></i>
                        <span class="links_name">Hello</span>
                    </a>
                </li>

                <li>
                    <a href="./forms.html" class="nav_cell">
                        <i class="icon_small fa-solid fa-envelope"></i>
                        <span class="links_name">Forms</span>
                    </a>
                </li>

            </ul>
        </div> 
     );
}

export default SideBar;