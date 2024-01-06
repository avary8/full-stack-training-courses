# React Course
Tutorial from https://youtu.be/RVFAyFWO4go?si=kFKC_ACh3CZwhSCA

Timestamps Progression\
1 hr 3 min  - 1-3-24 (intro + components + css + click events + useState)\
1 hr 36 min  - 1-4-24 (lists + keys)\
3 hr 4 min  - 1-5-24 (props + controlled components + practice)\
0 hr 0 min  - 1--24 ()\
0 hr 0 min  - 1--24 ()\


!Finished 


# Sections
- 1-6 are more intro concepts
- 7-9 grocery list example
- 10 practice application 


# Some notable info
cd all-lesson . type "npx create-react-app <folder name>" to create new project folder
- "npx create-react-app <folder name>" will create a folder in the current directory and will contain project folders such as node_modules, public, etc 
- react dev tools is good browser extension that adds to the existing dev tools 


#### Props
- props are passing through parent elements (App.js) and can be used in children elements (Header.js)
- set default values in children elements in case element was not defined in parent
- prop is passed in 
    ```
        const Header = (prop) => {

        return (
            <header>
                <h1>{prop.title}</h1>
            </header>
        )
        }
    ```
- or prop elements can be destructured and passed in 
    ```
        const Header = ({ title }) => {

        return (
            <header>
                <h1>{title}</h1>
            </header>
        )
        }
    ```

#### Adding css
- using [styled-components](https://styled-components.com/)
- inline in the jsx
    ```
        <header style={{
        backgroundColor: 'mediumblue',
        color: '#fff'
        }}>
    ```
- assign to variable before the jsx portion 
    ```
        const Header = () => {
        const headerStyle = {
        backgroundColor: 'mediumblue',
        color: '#fff'
        };

            return (
                <header style={headerStyle}>
                    <h1>Grocery List</h1>
                </header>
            )
        }
    ```
- for very basic projects. write in index.css and import into Index.js
  - if you create a style sheet for each component (app, header, content, footer, etc) you need to import each css into the respective component js file

### ES7+ React/Redux/React-Native/JS Snippets
- go to file->preferences->settings
- search 'emmet'
- find 'Emmet: Include languages'
  - add item = 'javascript' pair = 'javascriptreat'
ctrl+alt+r to bring up search bar
- rafce : creates a react arrow function (basic format such as Footer.js)


