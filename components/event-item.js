import Image from "next/image";
import Link from "next/link";
import DateIcon from "../components/icons/date-icon";
import AddressIcon from "../components/icons/address-icon";
import ArrowRightIcon from "../components/icons/arrow-right-icon";
import classes from "./event-item.module.css";

function EventItem(props) {
  const {
    name,
    theme,
    photoUrl,
    startDate,
    endDate,
    venue,
    startTime,
    endTime,
    id,
  } = props;

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

  const exploreLink = `/${id}`;

  return (
    <li className={classes.item}>
      {photoUrl ? (
        <Image src={photoUrl} alt={name} width={250} height={160} />
      ) : (
        <img src="" alt={name} />
      )}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{name}</h2>
          {theme ? <h3>Theme: {theme}</h3> : null}
          <div className={classes.date}>
            <DateIcon />
            <time>
              Starts: {humanReadableStartDate} at {startTime}
            </time>
          </div>
          <div className={classes.date}>
            <DateIcon />
            {endTime ? (
              <time>
                Ends: {humanReadableEndDate} at {endTime}
              </time>
            ) : (
              <time>Ends: {humanReadableEndDate}</time>
            )}
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{venue}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
              View Event
            </a>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
