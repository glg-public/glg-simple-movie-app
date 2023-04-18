# GLG Movie App

This is a is a simple React, Node and TypeScript App that is designed to run in Docker.

Please take the time to familiarize yourself with the code and be prepared to be able to discuss it.

#### Your task is to get it up and running in your local dev environment.

You should be able to load both the listing view

<img src="https://user-images.githubusercontent.com/1521814/225240239-32c6236f-fd85-43e6-beb7-95683e0a2d2e.png" width="600"/>

And the details view.  
<img src="https://user-images.githubusercontent.com/1521814/225240421-ae3ae260-4b04-4828-8998-8587380e94fd.png" width="600"/>

## Database Tables

The GLG Movie App consists of the following tables

### MEDIA TYPE

| MEDIA_TYPE_ID | MEDIA_TYPE |
| ------------- | ---------- |
| 1             | Movie      |
| 2             | TV Show    |

### MEDIA

| MEDIA_ID | MEDIA_NAME   | MEDIA_TYPE_ID | DESCRIPTION               | RELEASE_DATE |
| -------- | ------------ | ------------- | ------------------------- | ------------ |
| 90583    | Forrest Gump | 1             | Loremm ipsum...           | 1994-06-23   |
| 47283    | Seinfield    | 2             | Donec finibus pulvinar... | 1989-07-05   |

### USER

| USER_ID | NAME    | CREATE_DATE |
| ------- | ------- | ----------- |
| 6854    | Matthew | 2021-03-18  |
| 5748    | Susan   | 2023-02-05  |

### USER_MEDIA_WATCHED_RELATION

| USER_ID | MEDIA_ID | CREATE_DATE |
| ------- | -------- | ----------- |
| 3845    | 45636    | 2021-03-18  |
| 4929    | 22876    | 2023-02-05  |

#### USER_MEDIA_RATED_RELATION

| USER_ID | MEDIA_ID | RATING | CREATE_DATE |
| ------- | -------- | ------ | ----------- |
| 4513    | 15783    | 3      | 2020-11-18  |
| 9984    | 89432    | 2      | 2016-05-19  |

# Thank you and have fun.
