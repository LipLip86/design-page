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

  <div className={s.card}>
    <img src={photo1} alt="" className={s.card__image} />
    <div className={s.card__info}>
      INFO
    </div>
  </div>

  <div className={s.card}>
    <img src={photo2} alt="" className={s.card__image} />
    <div className={s.card__info}>
      INFO
    </div>
  </div>

  <div className={s.card}>
    <img src={photo3} alt="" className={s.card__image} />
    <div className={s.card__info}>
      INFO
    </div>
  </div>

  <div className={s.card}>
    <img src={photo1} alt="" className={s.card__image} />
    <div className={s.card__info}>
      INFO
    </div>
  </div>
</div>

</div>
  )
}

export default Team;
