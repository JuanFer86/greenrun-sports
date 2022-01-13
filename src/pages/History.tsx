import React, { FC } from "react";
import { ContentHistory } from "../styled/contentHistory";
import data from "../data/history.json";
import { HistoryCard } from "../components";

export const History: FC = () => {
  const { title, description, date } = data;

  return (
    <ContentHistory>
      <div className="container">
        <section className="header">
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{date}</p>
        </section>
        <section className="containerInfo">
          <HistoryCard />
          <HistoryCard />
          <HistoryCard />
        </section>
      </div>
    </ContentHistory>
  );
};
