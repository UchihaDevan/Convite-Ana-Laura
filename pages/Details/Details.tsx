import { Link } from "react-router-dom";
import CountDown from "../../components/CountDown/CountDown";
import Information from "../../components/Information/Information";
import RSVP from "../../components/RSVP/RSVP";

export default function Details() {
  return (
    <section>
      <div>
        <CountDown />
      </div>
      <div>
        <Information />
      </div>
      <div>
        <RSVP />
      </div>
    </section>
  );
}