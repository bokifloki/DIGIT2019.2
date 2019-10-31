import React from "react";
import styles from "./Donations.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Tabs.css";
import { fontSize } from "@material-ui/system";

function DonationsAmount({ donationAmounts, m }) {
  return (
    <>
      <div className={styles.amountHeading}>
        <h4>Choose an amount to give {m ? "per month" : null}</h4>
      </div>
      <div className={styles.buttonGrid}>
        <div className={styles.gridButtons}>
          {donationAmounts.map((donation, index) => (
            <button key={index}>
              ${donation}
              {m ? "/month" : null}{" "}
            </button>
          ))}
          <div className={styles.dollarInput}>
            <span> $</span>
            <input type="number" min="5" placeholder="Enter other amount" />
          </div>
        </div>
        <button className={styles.donateButton}>
          DONATE {m ? "MONTHLY" : null}
        </button>
      </div>
    </>
  );
}
function DonationWindow() {
  const singleDonations = [2, 5, 10, 20, 25, 50, 100];
  const monthlyDonations = [4, 10, 20, 50];
  return (
    <Tabs>
      <TabList>
        <Tab>GIVE ONCE</Tab>
        <Tab>MONTHLY</Tab>
      </TabList>

      <TabPanel>
        <DonationsAmount donationAmounts={singleDonations} />
      </TabPanel>
      <TabPanel>
        <DonationsAmount m donationAmounts={monthlyDonations} />
      </TabPanel>
    </Tabs>
  );
}

function HeroFirst() {
  return (
    <div className={styles.donateHero}>
      <div className={styles.donateSidebyside}>
        <div className={styles.donateLeft}>
          <DonationWindow />
        </div>
        <div className={styles.donateRight}>
          <h1>100% of your money brings resources to kids in need.</h1>
          <h4>
            Private donors cover our operating costs, so you can give knowing
            your whole gift will help bring clean water.
          </h4>
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
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export function Squares() {
  return (
    <div className={styles.squares}>
      <img src="https://cdn4.iconfinder.com/data/icons/medical-services-specialties-set-4/256/12-01-512.png"></img>
      <h5>Share your support</h5>
      <p>
        Support one of our many fundraisers raising money for cancer awareness.
      </p>
      <a href="#">Send support</a>
    </div>
  );
}

export function HeroThird() {
  return (
    <div className={styles.donateThirdHero}>
      <div className={styles.thirdContent}>
      <Squares></Squares>
      <Squares></Squares>
      <Squares></Squares>
      <Squares></Squares>
      </div>
    </div>
  );
}

function Donations() {
  return (
    <div>
      <HeroFirst></HeroFirst>
      <HeroSecond></HeroSecond>
      <HeroThird></HeroThird>
+    </div>
  );
}

export default Donations;

