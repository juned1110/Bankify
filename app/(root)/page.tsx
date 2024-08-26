import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <div>
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn?.name || "Guest"}
              subtext="Access and manage your accounts and transactions efficiently."
            />
            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250}
            />
          </header>
          RECENT TRANSACTIONS
        </div>

        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks={[{ currentBalance: 123 }, { currentBalance: 458 }]}
        />
      </section>
    </div>
  );
};

export default Home;
