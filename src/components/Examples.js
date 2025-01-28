import { useState } from 'react';
import TabController from './TabController.js';
import Section from './Section.js';
import Tabs from './Tabs.js';
import { EXAMPLES } from './data.js';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabController onSelected={() => handleSelect('components')}>
              Components
            </TabController>
            <TabController onSelected={() => handleSelect('jsx')}>
              JSX
            </TabController>
            <TabController onSelected={() => handleSelect('props')}>
              Props
            </TabController>
            <TabController onSelected={() => handleSelect('state')}>
              State
            </TabController>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
