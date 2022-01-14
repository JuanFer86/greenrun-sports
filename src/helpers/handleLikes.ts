import { collection, doc, setDoc } from "firebase/firestore";
import { Dispatch, SetStateAction } from 'react';
import { db } from "../firebase-config";

interface bodyProp {
    idSport: string
    isLike: boolean,
    uid: string,
}

export const handleLike = async (setSports: any, index: number, setIndex: Dispatch<SetStateAction<number>>, body: bodyProp) => {
    setSports((sport: any) => {
      const newArr = [...sport];
      newArr[index] = { ...newArr[index], coords: { x: body.isLike ? 0 : -2100, y: 20, scale: body.isLike ? 2: 1, transY: body.isLike ? 3 : 1 }, isLike: body.isLike };
      return newArr;
    });

    setTimeout(() => {
      setSports((sport: any) => {
        const newArr = [...sport];
        newArr[index].strSport = "";
        return newArr;
      });
    }, 5000);

    setIndex((index) => (index -1));

    await setDoc(doc(collection(db, "users")), body);
  };
