import { useState } from "react";
import Tab1 from "./tab1";
import Tab2 from "./tab2";
import Tab3 from "./tab3";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <section id="portfolio">
        <div className="contain">
          <ul className="tabs">
            <li className={activeTab === "all" ? "active" : ""}>
              <a href="#!" onClick={() => handleTab("all")}>
                ALL
              </a>
            </li>
            <li className={activeTab === "cloud-services" ? "active" : ""}>
              <a
                href="#!"
                className=""
                onClick={() => handleTab("cloud-services")}
              >
                Cloud Services
              </a>
            </li>
            <li className={activeTab === "cloud-mgt" ? "active" : ""}>
              <a href="#!" className="" onClick={() => handleTab("cloud-mgt")}>
                Cloud Management
              </a>
            </li>
            <li className={activeTab === "it-security" ? "active" : ""}>
              <a
                href="#!"
                className=""
                onClick={() => handleTab("it-security")}
              >
                IT Security
              </a>
            </li>
            <li className={activeTab === "networking" ? "active" : ""}>
              <a href="#!" className="" onClick={() => handleTab("networking")}>
                Networking
              </a>
            </li>
            <li className={activeTab === "marketing" ? "active" : ""}>
              <a href="#!" className="" onClick={() => handleTab("marketing")}>
                Marketing
              </a>
            </li>
          </ul>
          {activeTab === "all" && <Tab1 product="all_products" />}
          {activeTab === "cloud-services" && <Tab2 product="cloud_services" />}
          {activeTab === "cloud-mgt" && <Tab3 product="cloud_mgt" />}
          {activeTab === "it-security" && <Tab1 product="it_security" />}
          {activeTab === "networking" && <Tab1 product="networking" />}
          {activeTab === "marketing" && <Tab1 product="marketing" />}
        </div>
      </section>
    </div>
  );
};

export default Tab;
