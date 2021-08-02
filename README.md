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

### Bonus Deliverables

These bonus deliverables are here if you want an extra challenge and won't
affect your score. **Make sure to commit your work to save your progress before
attempting the bonus deliverables!**

As a user, I can:

1. Remove a comment from the page when it is clicked. (Note: no persistence is
   needed; it's fine if the comment shows up again when the page is refreshed)

2. Click the title of the image to toggle whether or not the image is being
   displayed. Clicking once on the title of the image (the `h2#card-title`
   element) will hide the image element visually. Clicking on the title
   again will display the image once more.

3. Click the image and see a new random image of a dog. Make a GET request to
   this API to request a random dog image:
   [https://dog.ceo/api/breeds/image/random](https://dog.ceo/api/breeds/image/random)
   Then replace the image of the dog with the new random image returned by the
   API.

### Extra Bonus

These extra bonus deliverables involve using `fetch` to update data on the
`json-server` backend by using `POST`, `PATCH`, and `DELETE` requests. These are
meant for an extra, extra challenge and won't affect your grade. **Make sure to
commit your work to save your progress before attempting the extra bonus
deliverables!**

1. When a user adds a new comment to the page using the comment form, in
   addition to having the comment show up on the page, it should **also** be
   saved to the server. You will need to make a request that follows this
   structure:

    ```txt
    POST /comments

    Request Headers: {
      Content-Type: application/json
    }

    Request Body: {
      "imageId": 1,
      "content": "your comment here"
    }

    ----

    Example Response: {
      "id": 4,
      "imageId": 1,
      "content": "your comment here"
    }
    ```

2. When a user deletes a comment by clicking it, in addition to having the
   comment removed from the page, it should **also** be removed on the server.
   You will need to make a request that follows this structure:

    ```txt
    DELETE /comments/:id

    ----

    Example Response: {}
    ```

3. When a user gets a new random dog image by clicking it, in addition to
   displaying the new image on the page, it should **also** be updated on the
   server. You will need to make a request that follows this structure:

    ```txt
    PATCH /images/1

    Request Headers: {
      Content-Type: application/json
    }

    Request Body: {
      "image": "new dog image url here"
    }
    ----

    Example Response: {
      "id": 1,
      "title": "Woofing those bugs away",
      "likes": 0,
      "image": "new dog image url here"
    }
    ```
