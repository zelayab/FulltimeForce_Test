import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { CardComponent } from './components/CardComponent/CardComponent';
import { CommitsListComponent } from './components/CommitsListComponent/CommitsListComponent';

function App() {
  return (
    <Router>
      <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span class="font-semibold text-xl tracking-tight">FullTimeForce Test</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow mr-5">
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              <Link to="/">Home</Link>
            </a>

            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mx-4">
              <Link to="/docs">Docs Github Api</Link>
            </a>
            <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <Link to="/commits">Commits</Link>
            </a>
          </div>
          <div>
            <a href="www.github.com" target="_blank" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Go to github</a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<CardComponent
          img="https://avatars.githubusercontent.com/u/9919?s=280&v=4"
          title="Github"
          text="Github is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 50 million developers."
        />} />
        <Route path="/commits" element={<CommitsListComponent />} />
        <Route path="/docs" element={<a href="https://docs.github.com/en/rest" target="_blank">Github Api</a>} />
      </Routes>
    </Router>
  );
}

export default App;
