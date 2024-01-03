# Twitter Clone - MERN Stack (minus React)

## Progress Notes
### 1-1-24 :-: 1-2-24 (~5 hours)  
clone is functional with MongoDB. allows posting and viewing twoots 
#### Worked on
- front-end: pretty page, displaying twoots, posting new twoots
  - used ejs to read data from MongoDB
  - page sections resize properly 
- back-end: twoots controller, router, and server files (all functionality basically)

#### What's left
- fix so routes that are not '/' either redirect or go to 404 page
  - right now neither is working
- add the ability to write a username in form data 
- include username into front-end display of twoots

#### Consider
- change color of twoot button (and text box) when hovering
- add buttons that go to oldest/newest twoot 
- display date twooted  
- fixing page so that it does not flash without css when posting a twoot
- functionality to update and delete twoots is put into place; however, these functions would only be useful if auth was also added
  
### 1-2-24 (~1-2 hours) 
#### Worked on
- changed color of twoot button (and text box) when hovering
- added buttons that go to oldest/newest twoot

#### What's left
- fix so routes that are not '/' either redirect or go to 404 page
  - right now neither is working
- add the ability to write a username in form data 
- include username into front-end display of twoots

#### Consider
- display date twooted  
- fixing page so that it does not flash without css when posting a twoot
- functionality to update and delete twoots is put into place; however, these functions would only be useful if auth was also added


### 1-3-24 (~1 hour) 
#### Worked on
- added a textbox for username. default is "anon" 
- the frontend now displays the username and date that a twoot was twooted 
- all routes redirect to root
  - had to comment out line about '/:id' as it was catching anything written after '/'

#### Consider
- fixing page so that it does not flash without css when posting multiple twoots
- functionality to update and delete twoots is put into place; however, these functions would only be useful if auth was also added
- limiting username and/or twoot length 
- make typing twoot have an auto-adjusting text box 