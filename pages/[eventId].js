import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Fragment } from "react";
import Head from "next/head";
import EventSummary from "../components/event-summary";
import EventLogistics from "../components/event-logistics";
import EventContent from "../components/event-content";
import parse from "html-react-parser";

function EventDetailPage(props) {
  const {
    name,
    venue,
    theme,
    startDate,
    startTime,
    endDate,
    endTime,
    photoUrl,
    description,
    onlineMeetingLink,
    code,
  } = props.selectedEvent;

  return (
    <Fragment>
       <Head>
        <title>{name}</title>
        <meta name='description' content={description}/>
      </Head>
      <EventSummary title={name} />
      <EventLogistics
        name={name}
        venue={venue}
        startDate={startDate}
        startTime={startTime}
        endDate={endDate}
        endTime={endTime}
        photoUrl={photoUrl}
      />
      <EventContent>
        {theme && <h2 className='my-8'>Theme: {theme}</h2>}
        {onlineMeetingLink && (
          <Link href={onlineMeetingLink}>
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Online Meeting Link</a>
          </Link>
        )}
        <p>Passcode: {code}</p>
        <div className='my-8'>{parse(description)}</div>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const { data, error } = await client.query({
    query: gql`
      query {
        events {
          id
        }
      }
    `,
  });

  const paths = data.events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const eventId = context.params.eventId;
  const { data, error } = await client.query({
    query: gql`
    query {
      eventById(id: ${eventId}) {
        id
        name
        venue
        theme
        startDate
        startTime
        endDate
        endTime
        photoUrl
        description
        onlineMeetingLink
        code
        externalDomain
      }  
    }
    `,
  });

  return {
    props: {
      selectedEvent: data.eventById,
    },
    revalidate: 30,
  };
}

export default EventDetailPage;
