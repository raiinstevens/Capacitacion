import { useState } from 'react';

import Side from './componet/Sidebar';
import Head from './componet/Head';
import Body from './componet/Body';



function App() {

  const [visible, setVisible] = useState(false);

  return (
    <div className="relative p-2">
      <Head className="fixed " visible={visible} setVisible={setVisible}/>
      <Side visible={visible} setVisible={setVisible}/>
      <Body />
    </div>
  )
}

export default App
