import React, { useState } from "react";
import styles from "./Donations.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Tabs.css";
import { fontSize } from "@material-ui/system";
import Squares from "../Squares/Squares";
import SanoButton from "../SanoButton/SanoButton";

import { playCircleO } from "react-icons-kit/fa/playCircleO";
import { picture } from "react-icons-kit/ikons/picture";
import { microsoft } from "react-icons-kit/ikons/microsoft";
import { twitter } from "react-icons-kit/ikons/twitter";

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
  return (
    <div className={styles.donateSecondHero}>
      <div className={styles.section}>
        <div className={styles.sectionRight}>
          <h1>Join The Spring to invest in clean water and sustainability.</h1>
          <p>
            Give monthly, and you’ll become a part of The Spring, a passionate
            community invested in a world where everyone has clean water.
          </p>
          <SanoButton variant="cta">Learn More</SanoButton>
        </div>
      </div>
    </div>
  );
}

export function HeroThird() {
  const donationSquares = [
    {
      icon: picture,
      heading: "Share your support",
      content:
        "Support one of our many fundraisers raising money for cancer awareness.",
      link: "Send support"
    },
    {
      icon: twitter,
      heading: "Share your supportg",
      content:
        "Support one of our many fundraisers raising money for cancer awareness.",
      link: "Send support"
    },
    {
      icon: playCircleO,
      heading: "Share your supportd",
      content:
        "Support one of our many fundraisers raising money for cancer awareness.",
      link: "Send support"
    },
    {
      icon: microsoft,
      heading: "Share your supports",
      content:
        "Support one of our many fundraisers raising money for cancer awareness.",
      link: "Send support"
    }
  ];
  return (
    <div className={styles.donateThirdHero}>
      <div className={styles.thirdContent}>
        <Squares squares={donationSquares}></Squares>
      </div>
    </div>
  );
}

export default function Donations() {
  return (
    <div>
      <HeroFirst></HeroFirst>
      <HeroSecond></HeroSecond>
      <HeroThird></HeroThird>+{" "}
    </div>
  );
}
