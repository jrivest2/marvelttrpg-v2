import { useContext } from "react";
import { statsContext } from "../../context";
import Power from "../../../objectClasses/power";

export default function PowerShow({ power }) {

    return <div>{power.name}</div>
}