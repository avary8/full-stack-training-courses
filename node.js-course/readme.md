# Node.js Course + Intro to mongoDB 
Tutorial from https://www.youtube.com/watch?v=f2EqECiTBL8

Timestamps Progression\
0 hr 20 min  - 10-31-23 (basics)\
0 hr 46 min  - 12-25-23 (read/write)\
3 hr 44 min  - 12-31-23 (npm + event listener (logger) + node.js web server + express server + middleware + cors + route handling + MVC)\
6 hr 51 min  - 1-1-24 (authentication + JWT + authorization + user roles + MongoDB)\

Finished 

# Sections
Everything is cumulative starting at section 3
- 3-5 are bare-bones node.js web server
- 6-7 are the web server using express. this part also introduces separating middlewares and touches upon CORS
- 8 introduces route handling (removes chained next() example)
- 9 organizes 8 based on MVC (Model View Controller) design pattern. also streamlines the project: deletes extraneous files (subdir and new-page examples) and some comments
- 10-12 authentication, JWT, and authorization. 
- 13-15 converting json models to MongoDB schemas

# Some notable info
- "node <file name>" to run a node file
### Node.JS vs JS 
- runs on a server -- not in browser
- console is terminal window
- global object instead of window object
- has Common Core modules
- CommonJS modules instead of ES6 modules
- missing some JS APIs like fetch

### JWTs
- access token = short time
  - sent as JSON 
  - client stores in memory
  - do not store in local storage or cookie
- refresh token = long time
  - sent as httpOnly cookie (which cannot be accessed via JS)
  - not accessible via JS
  - must have expiry at some point

  #### Process : Acess Token
  - issued at authorization
  - client uses for API access until expires
  - verified with middleware
  - new token issued at Refresh request
  #### Process : Refresh Token
  - issued at authorization
  - client uses to request new Access Token
  - verified with endpoint and database
  - must be allowed to expire or logout
