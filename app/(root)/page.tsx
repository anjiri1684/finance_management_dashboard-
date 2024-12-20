import HeaderBox from "@/components/HeaderBox";
import React from "react";
import RigrSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.action";

async function Home() {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions effieciently "
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RigrSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 124.5 }, { currentBalance: 400 }]}
      />
    </section>
  );
}

export default Home;
