import React from "react";
import "./Donations.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Tabs.css";

function DonationWindow() {
  const donationAmounts = [2, 5, 10, 20, 25, 50, 100, 120, 150];
  return (
    <Tabs>
      <TabList>
        <Tab>GIVE ONCE</Tab>
        <Tab>MONTHLY</Tab>
      </TabList>

      <TabPanel>
        <div>
          {donationAmounts.map((donation, index) => (
            <button key={index}>{donation}</button>
          ))}
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
  return (
    <div className="donate-left">
      <div className="button-first">
        <button>DONATE ONCE</button>
        <button>MONTHLY</button>
      </div>
      {donationAmounts.map((donation, index) => (
        <button key={index}>{donation}</button>
      ))}
      <input type="text" placeholder="ENTER OTHER AMOUNT"></input>
    </div>
  );
}

function Donations() {
  return (
    <div>
      <nav></nav>
      <div className="donate-hero">
        <div className="donate-sidebyside">
          <div className="donate-left">
            <DonationWindow />
          </div>

          <div className="donate-right">
            <h1>100% of your money brings resources to kids in need.</h1>
            <h4>
              Private donors cover our operating costs, so you can give knowing
              your whole gift will help bring clean water.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donations;
