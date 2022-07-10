const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const logoImage = document.querySelector('#logo-img');
logoImage.src = siteContent.images["logo-img"];

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.images["cta-img"];

const accentImg = document.querySelector("#middle-img");
 accentImg.src = siteContent.images["accent-img"];

 const footer = document.querySelector("footer a");
 footer.textContent = siteContent.footer["copyright"];
 footer.classList.add('bold');
 console.log(footer);
 
 const contact = document.querySelector(".contact");
 contact.children[0].textContent = siteContent.contact["contact-h4"];
 contact.children[1].textContent = siteContent.contact["address"];
 contact.children[2].textContent = siteContent.contact["phone"];
 contact.children[3].textContent = siteContent.contact["email"];

 const topContent = document.querySelector(".top-content");
 topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
 topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];
 topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
 topContent.children[1].children[1].textContent = siteContent["main-content"]["about-content"];

 const bottomContent = document.querySelector(".bottom-content");
 bottomContent.children[0].children[0].textContent = siteContent["main-content"]["services-h4"];
 bottomContent.children[0].children[1].textContent = siteContent["main-content"]["services-content"];
 bottomContent.children[1].children[0].textContent = siteContent["main-content"]["product-h4"];
 bottomContent.children[1].children[1].textContent = siteContent["main-content"]["product-content"];
 bottomContent.children[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
 bottomContent.children[2].children[1].textContent = siteContent["main-content"]["vision-content"];

 const ctaText = document.querySelector(".cta h1");
 ctaText.textContent = siteContent.cta["h1"];

 const ctaButton = document.querySelector(".cta button");
 ctaButton.textContent = siteContent.cta["button"];

 const container = document.querySelector(".container nav");
 container.children[0].textContent = siteContent.nav["nav-item-1"];
 container.children[1].textContent = siteContent.nav["nav-item-2"];
 container.children[2].textContent = siteContent.nav["nav-item-3"];
 container.children[3].textContent = siteContent.nav["nav-item-4"];
 container.children[4].textContent = siteContent.nav["nav-item-5"];
 container.children[5].textContent = siteContent.nav["nav-item-6"];

 const navLink = document.querySelectorAll("header nav a");
 
 navLink.forEach((link) =>{
  link.classList.add('italic');
 })
 

