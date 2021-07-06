# Flatagram

Today you'll be building an app for viewing, liking, and commenting on a single picture. You will be using a local API and building out the frontend for our app, Flatagram.

## Demo

Use this gif as an example of how the app should work.

![demo gif](assets/demo.gif)

> To view in VSCode, right click on the README.md file and select "Open Preview".

## Setup

Run this command to get the backend started:

```sh
json-server --watch db.json --routes routes.json
```

**Make sure to run this command exactly as written**, otherwise your server will
not return data in the correct format. Test your server by visiting this route
in the browser:

[http://localhost:3000/images/1](http://localhost:3000/images/1)

Then, open the `index.html` file on your browser to run the application.

Write your code in the `src/index.js` file. The base URL for your API will be
[http://localhost:3000](http://localhost:3000).

## Core Deliverable

As a user, I can:

- See the image received from the server, including its title, likes and
  comments when the page loads. You will need to make a GET request to the
  following endpoint to retrieve the image data, along with its associated
  comments:

  ```txt
  GET /images/1

  Example Response:
  {
    "id": 1,
    "title": "Woofing those bugs away",
    "likes": 0,
    "image": "./assets/coder-dog.png",
    "comments": [
      {
        "id": 1,
        "imageId": 1,
        "content": "What a cute dog!"
      },
      {
        "id": 2,
        "imageId": 1,
        "content": "He's got a nose for bugs!"
      },
      {
        "id": 3,
        "imageId": 1,
        "content": "Woof!"
      }
    ]
  }
  ```

- Click on the heart icon to increase image likes on the page. **No persistence is
  needed** for the core deliverables.

- Add a new comment to the page when the comment form is submitted. **No
  persistence is needed** for the core deliverables.

## Advanced Deliverables

These deliverables are not required to pass the code challenge, but if you have
the extra time, or even after the code challenge, they are a great way to
stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure
> to have a working commit with all the Core Deliverables first!

As a user, I can:

- Persist the number of likes when the heart icon is clicked. You will need to
  make PATCH request to this endpoint with the updated number of likes:

  ```txt
  PATCH /images/1

  Headers:
  Content-Type: application/json

  Body:
  {
    "likes": 1
  }

  Example Response:
  {
    "id": 1,
    "title": "Woofing those bugs away",
    "likes": 1,
    "image": "./assets/coder-dog.png"
  }
  ```

- Downvote an image. You will need to make PATCH request to this endpoint with
  the updated number of likes:

  ```txt
  PATCH /images/1

  Headers:
  Content-Type: application/json

  Body:
  {
    "likes": 0
  }

  Example Response:
  {
    "id": 1,
    "title": "Woofing those bugs away",
    "likes": 1,
    "image": "./assets/coder-dog.png"
  }
  ```

- Persist new comments. You will need to make a POST request to this endpoint
  with the image ID and the new comment:

  ```txt
  POST /comments

  Headers:
  Content-Type: application/json

  Body:
  {
    "imageId": 1,
    "content": "New comment!"
  }

  Example Response:
  {
    "id": 4,
    "imageId": 1,
    "content": "New comment!"
  }
  ```

- Delete a comment. You will have to make a DELETE request to this endpoint with the **comment** ID:

  ```txt
  DELETE /comments/:id

  Example Response:
  {}
  ```
