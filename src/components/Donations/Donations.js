import React, { useState } from "react";
import styles from "./Donations.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import HeroSplit from "../HeroSplit/HeroSplit";
import "./Tabs.css";
import { fontSize } from "@material-ui/system";
import Squares from "../Squares/Squares";
import donateImg from "./money.png";
import SanoButton from "../SanoButton/SanoButton";

import {heart} from 'react-icons-kit/ikons/heart'
import {home} from 'react-icons-kit/ikons/home'
import {ic_face} from 'react-icons-kit/md/ic_face'
import {ic_insert_emoticon} from 'react-icons-kit/md/ic_insert_emoticon'

function DonationsAmount({ donationAmounts, m, selected, setSelected }) {
  return (
    <>
      <div className={styles.amountHeading}>
        <h4>Избери сума {m ? "месечно" : null}</h4>
      </div>
      <div className={styles.buttonGrid}>
        <div className={styles.gridButtons}>
          {donationAmounts.map((donation, index) => {
            if (selected === donation) {
              return (
                <button
                  className={styles.amount}
                  key={index}
                  style={{ backgroundColor: "#369ff4", color: "white" }}
                  onClick={() => setSelected(donation)}
                >
                  ${donation}
                  {m ? "/мес" : null}{" "}
                </button>
              );
            }
            return (
              <button
                className={styles.amount}
                key={index}
                onClick={() => setSelected(donation)}
              >
                ${donation}
                {m ? "/мес" : null}{" "}
              </button>
            );
          })}
          <div className={styles.dollarInput}>
            <span> $</span>
            <input type="number" min="5" placeholder="Внеси друга сума" />
          </div>
        </div>
        <button className={styles.donateButton}>
          ДОНИРАЈ {m ? "МЕСЕЧНО" : null}
        </button>
      </div>
    </>
  );
}
function DonationWindow() {
  const singleDonations = [2, 5, 10, 20, 25, 50, 100];
  const monthlyDonations = [4, 10, 20, 50];
  const [selected, setSelected] = useState(null);
  return (
    <Tabs>
      <TabList>
        <Tab>GIVE ONCE</Tab>
        <Tab>MONTHLY</Tab>
      </TabList>

      <TabPanel>
        <DonationsAmount
          selected={selected}
          setSelected={setSelected}
          donationAmounts={singleDonations}
        />
      </TabPanel>
      <TabPanel>
        <DonationsAmount
          m
          selected={selected}
          setSelected={setSelected}
          donationAmounts={monthlyDonations}
        />
      </TabPanel>
    </Tabs>
  );
}

function HeroFirst() {
  return (
    <div className={styles.donateHero}>
      <div className={styles.donateSidebyside}>
        <div className={styles.donateLeft}>
          <h1>
            100% од вашите пари одат за ресурси на децата на кои им се потребни.
          </h1>
          <h4>
            Private donors cover our operating costs, so you can give knowing
            your whole gift will help bring clean water.
          </h4>
        </div>
        <div className={styles.donateRight}>
          <DonationWindow />
        </div>
      </div>
    </div> 
  );
}
function HeroSecond() {
  return <div className={styles.donateSecondHero}></div>;
}

export function HeroThird() {
  const donationSquares = [
    {
      icon: ic_face,
      heading: "Донеси среќа",
      content:
        "Вашите донации допринесуваат децата да имаат причина да се среќни."
    },
    {
      icon: home,
      heading: "Изгради дом",
      content:
        "Вашите донации обезбедуваат сигурен дом, исполнет со љубов и топла прегратка.",
     
    },
    {
      icon: heart,
      heading: "Пружи љубов",
      content:
        "Вашите донации пружаат неизмерна љубов кон целото САНО семејство.",
     
    },
    {
      icon: ic_insert_emoticon,
      heading: "Изнуди насмевки",
      content:
        "Биди причина за изнудени насмевки кои го спојуваат САНО како семејство.",
      
    }
  ];
  return (
    <div className={styles.donateHeroThird}>
      <div className={styles.thirdContent}>
        <Squares squares={donationSquares}></Squares>
      </div>
    </div>
  );
}

export default function Donations() {

  console.log(donateImg)
  return (
    <div style={{paddingTop:"60px"}}>
      {/* <HeroFirst></HeroFirst> */}
      <HeroSplit
      //  lImg={donateImg}
       lImgSize="contain"
       leftContent={
         <div style={{width: '100%', height: '300px'}}><img style={{width:'100%', height: '100%', objectFit:'contain'}} src={donateImg} alt='e'></img></div>
       }
        rightContent={
          <DonationWindow />
        }
      />
      <HeroThird></HeroThird>+{" "}
    </div>
  );
}
