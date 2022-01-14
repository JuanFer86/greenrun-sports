import React, { FC, useContext, useEffect, useState } from "react";
import { ContentHistory } from "../styled/contentHistory";
import data from "../data/history.json";
import { HistoryCard } from "../components";
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from "../firebase-config";
import AppContext from "../context/AppContext";

interface props {
    [key: string]: any
}

export const History: FC = () => {
  const { title, description, date } = data;

  const { state: { uid } } = useContext(AppContext);

  const [historial, setHistorial] = useState<props[]>([])

  useEffect(() => {

    (async () => {
        const q = query(collection(db, 'users'), where( 'uid', "==", uid ));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => setHistorial( (histo) => ([ ...histo, { id: doc.id, ...doc.data() } ]) ) )
        // {
        //     console.log(doc.id, " => ", doc.data());
        // } 
    })()

  }, [])

  return (
    <ContentHistory>
      <div className="container">
        <section className="header">
          <h4>{title}</h4>
          <p>{description}</p>
          <p>{date}</p>
        </section>
        <section className="containerInfo">
            {
                historial.map( ( values ) => (
                    <HistoryCard key={values?.id} isLike={values?.isLike} idSport={ values?.idSport } />
                ))
            }
        </section>
      </div>
    </ContentHistory>
  );
};
