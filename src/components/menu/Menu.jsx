import MenuItem from "./MenuItem";
import {FaHome} from "react-icons/fa"
import {AiFillFire,AiFillStar} from "react-icons/ai"
import {GiNinjaHeroicStance,GiGhost,GiRomanToga} from "react-icons/gi"
import {HiDocument} from "react-icons/hi"
import {MdTheaterComedy} from "react-icons/md"

import "./menu.scss"
function Menu() {
    return ( 
        <div className="menu">
            <MenuItem Icon={FaHome} title = "Netflix Originals" to = "Netflix Originals"/>
            <MenuItem Icon={AiFillFire} title = "Trending" to = "Trending Movies"/>
            <MenuItem Icon={AiFillStar} title = "Top rate" to = "Top Rated Movies"/>
            <MenuItem Icon={GiNinjaHeroicStance} title = "Action Movies" to = "Action Movies"/>
            <MenuItem Icon={MdTheaterComedy} title = "Comedy Movies" to = "Comedy Movies"/>
            <MenuItem Icon={GiGhost} title = "Horror Movies" to = "Horror Movies"/>
            <MenuItem Icon={GiRomanToga} title = "Romance Movies" to = "Romance Movies"/>
            <MenuItem Icon={HiDocument} title = "Documantaries" to = "Documantaries Movies"/>
        </div>
     );
}

export default Menu;