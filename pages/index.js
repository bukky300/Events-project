import { Fragment } from "react";
import Head from "next/head";
import EventList from "../components/event-list";
import { gql } from "@apollo/client";
import client from "../apollo-client";

function AllEvents(props) {

  if(props.error) {
    return <h2> Oops! Something went Wrong</h2>
  }

  return (
    <Fragment>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find new and exicting events that allow you to evolve"
        />
      </Head>
      <EventList items={props.events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const { data, error } = await client.query({
    query: gql`
      query {
        events {
          id
          name
          venue
          theme
          startDate
          startTime
          endDate
          endTime
          photoUrl
        }
      }
    `,
  });

  if(error) {
    return {
      props: {
        error: error,
      },
    };
  }

  return {
    props: {
      events: data.events,
    },
    revalidate: 1800,
  };
}

export default AllEvents;
