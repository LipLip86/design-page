import React from "react";
import s from "./Team.module.css";
import photo1 from "../../assets/Photo_team.jpg";
import photo2 from "../../assets/Photo_team2.jpg";
import photo3 from "../../assets/Photo_team3.jpg";

const Team: any = () => {
  return (
<div className={s.container_team_main}>
  <h3>What the People Thinks About Us
</h3>
<div className={s.container_team__card_container}>
    <div className={s.container_team__card1}>
      <img src={photo1} />
    </div>
    <div className={s.container_team__car2}>
      <img src={photo2} />
    </div>
    <div className={s.container_team__card3}>
      <img src={photo3} />
    </div>
    <div className={s.container_team__car4}>
      <img src={photo1} />
    </div>

</div>

</div>
  )
}

export default Team;
