let certifications = [
  { certificate: "Routing and Switching", date: "Jun / 2000" },
  { certificate: "Web Development", date: "Jan / 2003" },
  { certificate: "Python Coding", date: "Aug / 2009" },
  { certificate: "JavaScript", date: "Nov / 2020" },
];

let ul = document.querySelector("#certifications");

for (i = 0; i < certifications.length; i++) {
  let li = document.createElement("li");
  string = `${certifications[i].certificate} - ${certifications[i].date} `;

  let html = `
  <p class="li-cert">${string}</p>`;

  li.innerHTML = html;

  ul.appendChild(li);
}
