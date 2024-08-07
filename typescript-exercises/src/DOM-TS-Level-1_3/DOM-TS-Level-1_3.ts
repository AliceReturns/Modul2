console.clear();

const gallery = document.getElementById("gallery") as HTMLDivElement;

gallery.innerHTML += "<figure></figure>";
gallery.innerHTML += "<figure></figure>";
gallery.innerHTML += "<figure></figure>";

const figures = document.querySelectorAll("figure");

figures.forEach((figure, index) => {
  figure.innerHTML = `<img src="https://picsum.photos/200/300?random=${index}" alt="Random image ${index}" />`;
  figure.innerHTML += `<figcaption>Random image ${index}</figcaption>`;
});
