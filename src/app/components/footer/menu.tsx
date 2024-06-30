import { FC, useState } from "react";

const PillsNavigation: FC = () => {
  const [activeTab, setActiveTab] = useState("pills-home01");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      {/* Pills navigation */}
      <ul
        className="mb-5 flex list-none flex-col flex-wrap ps-0 md:flex-row"
        role="tablist"
      >
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#pills-home01"
            className={`my-2 block px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 md:me-4 ${
              activeTab === "pills-home01"
                ? "bg-primary-100 text-primary-700 dark:bg-slate-900 dark:text-primary-500"
                : "dark:bg-neutral-700 dark:text-white/50"
            }`}
            id="pills-home-tab01"
            onClick={() => handleTabClick("pills-home01")}
            role="tab"
            aria-controls="pills-home01"
            aria-selected={activeTab === "pills-home01"}
          >
            Products
          </a>
        </li>

        <li role="presentation" className="flex-auto text-center">
          <a
            href="#pills-home01"
            className={`my-2 block px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 md:me-4 ${
              activeTab === "pills-home01"
                ? "bg-primary-100 text-primary-700 dark:bg-slate-900 dark:text-primary-500"
                : "dark:bg-neutral-700 dark:text-white/50"
            }`}
            id="pills-home-tab01"
            onClick={() => handleTabClick("pills-home01")}
            role="tab"
            aria-controls="pills-home01"
            aria-selected={activeTab === "pills-home01"}
          >
            Features
          </a>
        </li>

        <li role="presentation" className="flex-auto text-center">
          <a
            href="#pills-home01"
            className={`my-2 block px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 md:me-4 ${
              activeTab === "pills-home01"
                ? "bg-primary-100 text-primary-700 dark:bg-slate-900 dark:text-primary-500"
                : "dark:bg-neutral-700 dark:text-white/50"
            }`}
            id="pills-home-tab01"
            onClick={() => handleTabClick("pills-home01")}
            role="tab"
            aria-controls="pills-home01"
            aria-selected={activeTab === "pills-home01"}
          >
            Resources
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#pills-home01"
            className={`my-2 block px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 md:me-4 ${
              activeTab === "pills-home01"
                ? "bg-primary-100 text-primary-700 dark:bg-slate-900 dark:text-primary-500"
                : "dark:bg-neutral-700 dark:text-white/50"
            }`}
            id="pills-home-tab01"
            onClick={() => handleTabClick("pills-home01")}
            role="tab"
            aria-controls="pills-home01"
            aria-selected={activeTab === "pills-home01"}
          >
            Trade
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#pills-home01"
            className={`my-2 block px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 md:me-4 ${
              activeTab === "pills-home01"
                ? "bg-primary-100 text-primary-700 dark:bg-slate-900 dark:text-primary-500"
                : "dark:bg-neutral-700 dark:text-white/50"
            }`}
            id="pills-home-tab01"
            onClick={() => handleTabClick("pills-home01")}
            role="tab"
            aria-controls="pills-home01"
            aria-selected={activeTab === "pills-home01"}
          >
            About
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#pills-home01"
            className={`my-2 block px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 md:me-4 ${
              activeTab === "pills-home01"
                ? "bg-primary-100 text-primary-700 dark:bg-slate-900 dark:text-primary-500"
                : "dark:bg-neutral-700 dark:text-white/50"
            }`}
            id="pills-home-tab01"
            onClick={() => handleTabClick("pills-home01")}
            role="tab"
            aria-controls="pills-home01"
            aria-selected={activeTab === "pills-home01"}
          >
            Blog
          </a>
        </li>
        <li role="presentation" className="flex-auto text-center">
          <a
            href="#pills-home01"
            className={`my-2 block px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 md:me-4 ${
              activeTab === "pills-home01"
                ? "bg-primary-100 text-primary-700 dark:bg-slate-900 dark:text-primary-500"
                : "dark:bg-neutral-700 dark:text-white/50"
            }`}
            id="pills-home-tab01"
            onClick={() => handleTabClick("pills-home01")}
            role="tab"
            aria-controls="pills-home01"
            aria-selected={activeTab === "pills-home01"}
          >
            Support
          </a>
        </li>
      </ul>
    </>
  );
};

export default PillsNavigation;
