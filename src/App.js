import React from 'react';
import './App.css';
import Header from './components/Header';
import MajorSide from './components/MajorSide';
import EnterSection from './components/EnterSection';
import Organizations from './components/Organizations';
import TeamInfo from './components/TeamInfo';
import Robot from './components/Robot';
import GithubGallery from './components/GithubGallery';
import Security from './components/Security';
import CodeSecurity from './components/CodeSecurity';
import Host from './components/Host';
import Integrations from './components/Integrations';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Header/>
      <MajorSide/>
      <EnterSection />
      <Organizations />
      <TeamInfo />
      <Robot />
      <GithubGallery />
      <Security />
      <CodeSecurity />
      <Host />
      <Integrations />
      <Community />
      <Footer />

  </main>
  ); 
}

export default App;
