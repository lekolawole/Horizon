import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar';

const Home = () => {
  const loggedIn = { firstName: 'Lade', lastName: 'Guest', email: 'afrowestern@outlook.com' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type="greeting" title="Welcome" user={loggedIn.firstName || 'Guest'} subtext="Access and manage your account and transactions." />
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1225.34} />
        </header>

        RECENT TRANSACTIONS 
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance: 32.14}, {currentBalance: 500}]} />
    </section>
  )
}

export default Home