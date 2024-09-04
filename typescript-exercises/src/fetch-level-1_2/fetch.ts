// URL für Kommentare zu Post 1
const commentsURL = "https://jsonplaceholder.typicode.com/posts/1/comments";

// URL für alle Posts
const postsURL = "https://jsonplaceholder.typicode.com/posts";

// Abrufen der Kommentare und Ausgabe der E-Mail-Adressen
fetch(commentsURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der Kommentare");
    }
    return response.json();
  })
  .then((comments) => {
    console.log("E-Mail-Adressen der Kommentierenden:");
    comments.forEach((comment) => {
      console.log(comment.email);
    });
  })
  .catch((error) => {
    console.error("Fehler:", error);
  });

// Abrufen aller Posts und weitere Verarbeitung
fetch(postsURL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Fehler beim Abrufen der Posts");
    }
    return response.json();
  })
  .then((posts) => {
    // Alle Posts in der Konsole ausgeben
    console.log("Alle Posts:");
    console.log(posts);

    // Höchste Post-ID finden
    const highestPostId = Math.max(
      ...posts.map((post: { id: any }) => post.id)
    );
    console.log("Höchste Post-ID:", highestPostId);

    // Kürzesten Titel finden
    const shortestTitle = posts.reduce(
      (shortest: string | any[], post: { title: string | any[] }) =>
        post.title.length < shortest.length ? post.title : shortest,
      posts[0].title
    );
    console.log("Kürzester Titel:", shortestTitle);

    // Längsten Body finden
    const longestBody = posts.reduce(
      (longest: string | any[], post: { body: string | any[] }) =>
        post.body.length > longest.length ? post.body : longest,
      posts[0].body
    );
    console.log("Längster Body:", longestBody);
  })
  .catch((error) => {
    console.error("Fehler:", error);
  });
