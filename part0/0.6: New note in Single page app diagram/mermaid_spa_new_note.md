```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server->>browser: HTTP status code 201

    Note right of browser: The server updates the data.json with the new note
```
