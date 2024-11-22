# Usage Blog-post

```
cd blog-post 
npm install
npm run dev
```


## Key Sections

1. State Management:
- posts is used to store the list of fetched blog posts.
- error stores error messages, which are displayed if the API call fails.

2. API Integration:
- The fetch API is used to get data from https://jsonplaceholder.typicode.com/posts.
- A check is implemented to ensure the response is successful; if not, an error is thrown.

3. Error Handling:
- If an error occurs during the API call, it's caught in the catch block and the error state is updated.

4. UI Rendering:
- If there's an error, it displays an error message.
- If the data is still loading (posts is empty), it displays "Loading...".
- Once posts are fetched, the titles and bodies are displayed as a list.