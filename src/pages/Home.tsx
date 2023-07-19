import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/Card";
import { Tabs, TabList, TabPanel, Tab } from "@/components/Tabs";
import Chart from "@/components/Chart";
import BuySell from "@/components/BuySell";

const Home: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [selectedTabIndex, SetSelectedTabIndex] = React.useState(0);

  const tabs = [
    { title: 'Day', lower: '4.895', higher: '4.995' },
    { title: 'Week', lower: '4.762', higher: '4.835' },
    { title: 'Month', lower: '5.245', higher: '5.595' },
    { title: 'Year', lower: '3.456', higher: '5.599' },
  ];

  const data = [
    { time: 1, price: 2 },
    { time: 2, price: 2.6 },
    { time: 3, price: 2.8 },
    { time: 4, price: 2.6 },
    { time: 5, price: 2.7 },
    { time: 6, price: 2.9 },
    { time: 7, price: 3 },
    { time: 8, price: 2.9 },
    { time: 9, price: 2.7 },
    { time: 10, price: 2.8 },
  ];

  const HandleBtnClick = () => {
    console.log("Rank Math")
  }

  const HandleDropdownBtnClick = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const HandleTabClick = (index: React.SetStateAction<number>) => {
    SetSelectedTabIndex(index)
  }

  return (
    <>
      <Header />
      <div className="contents">
        <Card>
          <CardHeader>
            <div className="crypto-img">
              <img src="images/fonts/btc.svg" alt="btc" />
            </div>
            <div className="crypto-name">Bitcoin</div>
            <div className="crypto-symbol">BTC</div>
          </CardHeader>
          <CardBody>
            <div className="amount">3.529020 BTC</div>
            <div className="balance-percent">$19.153 USD <span>- 2.32%</span></div>
            <BuySell onClick={HandleBtnClick} className={dropdownOpen? 'open': ''} />
          </CardBody>
          <CardFooter>
            <Button onClick={() => HandleDropdownBtnClick()} link fullWidth className="dropdown-btn">
              <FontAwesomeIcon icon={dropdownOpen? faAngleUp: faAngleDown} color="#aeb8c4" size="xl" />
            </Button>
          </CardFooter>
        </Card>
        <Tabs>
          <TabList>
            {tabs.map((tab, index) => (
              <Tab key={index} onClick={() => HandleTabClick(index)} className={selectedTabIndex == index ? 'selected' : ''}>{tab.title}</Tab>
            ))}
          </TabList>
          {tabs.map((tab, index) => (
            <TabPanel key={index} className={selectedTabIndex == index ? 'selected' : ''}>
              <Card>
                <CardHeader className="chart-header">
                  <div className="chart-header-low">
                    Lower: ${tab.lower}
                  </div>
                  <div className="chart-header-high">
                    Higher: ${tab.higher}
                  </div>
                </CardHeader>
                <CardFooter className="chart-container">
                  <Chart data={data} />
                </CardFooter>
              </Card>
            </TabPanel>
          ))}
        </Tabs>
        <BuySell onClick={HandleBtnClick} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
