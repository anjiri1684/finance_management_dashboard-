import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import React from "react";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.action";

async function MyBanks() {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn.$id });

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activity"
        />
        <div className="spcae-y-4">
          <h2 className="header-2">Your Cards</h2>
          <div className="flex flex-wrap">
            {accounts &&
              accounts.data.map((a: Account) => (
                <BankCard
                  key={accounts.id}
                  account={a}
                  userName={loggedIn?.firstname}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyBanks;
