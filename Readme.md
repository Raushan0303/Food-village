# Namste React

# Parcel
- Dev Build
- Local server
- HMR = HOT Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Build
- Image Optimization
- Minfication
- Bundling
- Compress
- Consitenet Hashing
- Code Splitting
- Differential Budling - support older browsers
- Diagonstics
- Error Handling
- HTTPs
- Tree Shaking - remove unsused code
- Different Dev and Prod Bundles

- food-village

/**
* Header
*  -Logo
*  -Nav-items
* Body
*   - Search
*   - ResturantContainer
*   -   ResturantCard
*       - img
*       - Name of Res, Star Rating, cuisine, delay tie
* Footer 
*   - Copyright
*   - Links
*   - Address
*   - Contact
*/

Two types of Export/imports

- Default Export/Import

export default Componenet;
Import Componenet from "path"

- Named Export/Import

export const component;

import {Component} from "path"

# React Hooks
- useState()
- useEffect()

- what useEffect() does? it's a callback function, when the executes line by line, when
- useEffect() got appeared it will save the callback function to call it after render
- means after randring the whole code then useEffect comes into the picture does the magic
- and render the wholepage again

# 2 types Routing in web apps
    - Client Side Routing
    - Server Side Routing 