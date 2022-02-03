import React from 'react';
import "./skilllist.scss";

export default function SkillList({title, active, setSelected, id}) {
    return <div>
        <li className={active ? "skillList active" : "skillList"}
            onClick={()=>setSelected(id)}>
            {title}</li>

    </div>;
}
