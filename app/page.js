'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Rubik } from 'next/font/google';
import { useState } from 'react'

const rubik = Rubik({
  weight: '500',
  subsets: ['latin'],
})

export default function Home() {
  const [data, setData] = useState(null)
  const [value, setValue] = useState('');
  const [isLoading, setLoading] = useState(false)
  function reqData(e) {
    if (e.keyCode == 13) {
      setLoading(true);
      console.log(value)
      fetch("https://74b34d68-942f-4722-89ab-f51ff5fcd866-00-1jyzeoed0wnzc.janeway.replit.dev/get?q=" + value)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
          console.log(data)
        })
    }
  }
  return (
    <main className={styles.main}>
      <div id="background">
        <img src="https://i.postimg.cc/mgGzMnNC/background.jpg" id="stretch" alt="" />
      </div>
      <div id="mainc">
        <p className={styles.heading}>Disease Detective</p>
        <input onChange={e => { setValue(e.currentTarget.value); }} onKeyDown={(e) => reqData(e)} id="search" placeholder="Search" type="text"></input>
        {isLoading && (

          <div class="center">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        )}
        {data != null && (
          data.map((x) => {
            return (
              <div className="item">
                <div>
                  <a href={x.link} className="ithead" target="_blank">{x.name}
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                    <span id="open" class="material-symbols-outlined">
                      open_in_new
                    </span>
                  </a>

                </div>
                <hr></hr>
                <p>Symptoms</p>
                <ul class="list">
                  {(x.symptoms).map((x) => {
                    console.log(x)
                    return (<li>{x}</li>)
                  })}
                </ul>
              </div>
            )
          })

        )}
        {data != null && data.length == 0 && (
          <p className="nothingFound">Looks like you found a new disease!</p>
        )}
        <p style={{ textAlign: "center", color: "gray" }}>Created by <strong>smack</strong>. Information supplied from Mayo Clinic. </p>
      </div>

    </main >
  );
}
