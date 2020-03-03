# back-end

|Status|Type|Description|Message|Return Value
|------|----|-----------|-------|------------|
200|Success|Logged in.|"Logged in (username)"|```{message: "Logged in (username)", token: string (token)}```


## Features
- list of issues
- add an issue
- list of votes an issue has
- list of votes a user has made(in user profile)

|Feature|Method|URL|
|:--|:--|:--|
|List of issues|GET|/api/issues|
|Add an issue|POST|/api/issues|
|View issues' votes|GET|/api/issues/:id/votes|
|View issues' creator|GET|/api/issues/:id/user|
|List of users|GET|/api/users|
|Add a user|POST|/api/users|
|View user |GET|/api/users/:id|
|View user's votes|GET|/api/users/:id/votes|
|

## Users
- id
- name
- email
- bio
- votes

## Issues
- id
- title
- description
- photo
- votes

## Votes
- id
- userId
- issueId