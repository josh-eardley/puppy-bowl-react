import React from "react";
import {createRoot} from 'react-dom/client';

const BasicComponentNameHere = () => { return ( <div> <p>Hello World!</p> </div> ) }

const appElement = document.getElementById("root");

const root = createRoot(appElement);

root.render(<BasicComponentNameHere />);

