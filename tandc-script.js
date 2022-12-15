let certifications = [
  { certificate: "CCIE-1", Year: 2000 },
  { certificate: "CCIE-2", Year: 2003 },
  { certificate: "CCIE-3", Year: 2009 },
  { certificate: "CCIE-3", Year: 2020 },
];

let ul = document.querySelector("#certifications");

for (i = 0; i < certifications.length; i++) {
  let li = document.createElement("li");
  string = `${certifications[i].certificate} - ${certifications[i].Year} `;

  let html = `
  <p class="card-text">${string}</p>`;

  li.innerHTML = html;

  ul.appendChild(li);
}
