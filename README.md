# Flatagram

Today you'll be building an app for viewing, liking, and commenting on a single
picture. You will be using a local API and building out the frontend for our
app, Flatagram.

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

## Deliverables

As a user, I can:

1. See the image received from the server, including its title, likes and
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

2. Click on the heart icon to increase image likes on the page. **No persistence
   is needed**.

3. Add a new comment to the page when the comment form is submitted. **No
   persistence is needed**.
