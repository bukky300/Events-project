import Image from "next/image";
import AddressIcon from "../components/icons/address-icon";
import DateIcon from "../components/icons/date-icon";
import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";

function EventLogistics(props) {
  const { name, venue, startDate, startTime, endDate, endTime, photoUrl } =
    props;

  const humanReadableStartDate = new Date(startDate).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const humanReadableEndDate = new Date(endDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        {photoUrl ? (
          <Image src={photoUrl} alt={name} width={310} height={310} />
        ) : (
          <img src="" alt={name} />
        )}
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>
            Starts: {humanReadableStartDate} <br />
            Time: {startTime}
          </time>
        </LogisticsItem>
        <LogisticsItem icon={DateIcon}>
          {endTime ? (
            <time>
              Ends: {humanReadableEndDate} <br />
              Time: {endTime}
            </time>
          ) : (
            <time>Ends: {humanReadableEndDate} </time>
          )}
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{venue}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
