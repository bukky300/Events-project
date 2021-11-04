import EventItem from './event-item';
import classes from './event-list.module.css';

function EventList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          name={event.name}
          theme={event.theme}
          venue={event.venue}
          startDate={event.startDate}
          startTime={event.startTime}
          endDate={event.endDate}
          endTime={event.endTime}
          photoUrl={event.photoUrl}
        />
      ))}
    </ul>
  );
}

export default EventList;