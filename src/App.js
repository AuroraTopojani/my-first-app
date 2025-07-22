import { Routes, Route } from "react-router-dom";
import Product from "./ReactRouter/Product";

export default function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} /> */}

        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

// import Header from "./Header/Header";
// import componentimg from "./assests/components.png";
// import { CORE_CONCEPTS } from "./data";
// import CoreConcepts from "./CoreConcepts";
// import TabButton from "./TabButton";
// import { useState } from "react";
// import { EXAMPLES } from "./data";
// import MUIDeemo from "./Button/MUIDeemo";
// import Welcome from "./useEffect/Welcome";
// import TitleChanger from "./useEffect/TitleChanger";
// import UserList from "./useEffect/UserList";
// import RandomJokes from "./useEffect/RandomJokes";

// function App() {
//   const [selectedButton, setSelectedButton] = useState();

//   function handleClick(selectedButton) {
//     setSelectedButton(selectedButton);
//   }

//   let tabContent = <p>Please click a button</p>;

//   if (selectedButton) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedButton].title}</h3>
//         <p>{EXAMPLES[selectedButton].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedButton].code}</code>
//         </pre>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <Header />
//       <section id="core-concepts">
//         <ul>
//           <CoreConcepts
//             title="COMPONENTS"
//             description="THE CORE UI"
//             image={componentimg}
//           />
//           <CoreConcepts
//             title={CORE_CONCEPTS[1].title}
//             description={CORE_CONCEPTS[1].description}
//             image={CORE_CONCEPTS[1].image}
//           />
//           <CoreConcepts {...CORE_CONCEPTS[2]} />
//           <CoreConcepts {...CORE_CONCEPTS[3]} />
//         </ul>
//       </section>
//       <main>
//         <h2>Time to get started!</h2>
//       </main>
//       <section id="examples">
//         <menu>
//           <TabButton
//             isSelected={selectedButton === "components"}
//             onSelect={() => handleClick("components")}
//           >
//             COMPONENTS
//           </TabButton>
//           <TabButton
//             isSelected={selectedButton === "jsx"}
//             onSelect={() => handleClick("jsx")}
//           >
//             JSX
//           </TabButton>
//           <TabButton
//             isSelected={selectedButton === "props"}
//             onSelect={() => handleClick("props")}
//           >
//             PROPS
//           </TabButton>
//           <TabButton
//             isSelected={selectedButton === "state"}
//             onSelect={() => handleClick("state")}
//           >
//             STATE
//           </TabButton>
//         </menu>
//         {tabContent}
//       </section>
//       <section>
//         <MUIDeemo />
//       </section>
//       <section>
//         <Welcome />
//         <TitleChanger />
//         <UserList />
//       </section>
//       <section>
//         <RandomJokes />
//       </section>
//     </div>
//   );
// }

// export default App;
