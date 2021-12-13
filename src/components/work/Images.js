const images = [
  {
    src: "https://drive.google.com/uc?export=view&id=1VHUTQocVKXowVih4f8BWiB4j3SaRqrOL",
    alt: "Dora and Boots",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=19E1-uYwkohdfGuf2C_a2CdeXB8wyPzJJ",
    alt: "Short haired girl",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1H4dqq9jy1_d3ngR0B0QKLUVadosOP-db",
    alt: "Anime girl",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1zobcBCLF68yRXeskPkMttgLTFcOAmjBs",
    alt: "Fairy girl",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1RRp6uW1cpfBuUsqHriUIbHwVeVZm5YLk",
    alt: "Girl with flowers on head",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1gjNJQdDkjFzJH02loEyQCTAKSizUBfFP",
    alt: "Icecream",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1ecYQhi-hxxWPX7t_EpOAvgOWuZ0GihD1",
    alt: "Magical Girl",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=18gv50OMfQGJdKRXEbffaP4QQE8w74ptM",
    alt: "Magician big hat",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=19lk0BMEdYW5gPR0VuOY8s70aRLkz9X_y",
    alt: "Rats with cupcake",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1N1uMIvMvWgfCtBPbZ6uhrdi48Kbki8H2",
    alt: "Cat with cake",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1ZEM5vOPX3iQrCu85-n93WrDVPz4o6eLB",
    alt: "Peppa pig",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1xTCn_-Yu64fhAViSb7JVp8bRaAMUe-Q2",
    alt: "Powerpuff girls",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1qyFi-8CHedheKdu666CEKjnSK-0mhJam",
    alt: "Pots abstract",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=12TrRO_SFM2rJr1m1oDOx1JF1CD9jY79R",
    alt: "Penwork mountains",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1_mZEmcrNJxRpYLKepDKs86wrluIygxVt",
    alt: "Penwork stones",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1dEVZX105kimK90u2Mc7skwVYWQZANj2P",
    alt: "Olive oil",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1yQS31qPZehWNqXgaOZ_j5V4ZvInchQOm",
    alt: "Moon and water girl",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1VsqY1wdsq9uD6iCICd_vt6L55sLHH9ef",
    alt: "Lady with pots",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1uLi0B22dLxlGyrmdYy49FUBvGzNo9Sz2",
    alt: "Lady sitting in Saree",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1ILUwbFURr3Udep4_cblkbLpQw6fi9O31",
    alt: "Lady and child traditional",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1urPHZujdc7t0bANU-8PCIae0-at9mzA8",
    alt: "Girl sitting",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1GLDeik3y10zFDWDzjhekm-QzZ3zhVAt-",
    alt: "Flowers on bicycle",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1QRqroOKV_WdV07H4COfNmbfr4B5L-77T",
    alt: "Flowery Gate",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1slxlrrBcOU6vXiJ5mYwt6f9cS71KoCyx",
    alt: "Child by the river",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1C3DSNXYFfzKw3ReKQ2Gx5fbBU8l4G7Uo",
    alt: "Butterfly",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1VisCDWY0lUNL1qIPZrYSIaRAFLjXoO-k",
    alt: "Girl figure",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1I4PuNPGp-NTwiXrpLIIJ0Ggk_i4_RDUz",
    alt: "Girl figure standing",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1O6amayk2JB-pnGPopsNxT8WIFciV8hNA",
    alt: "Girl portrait",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1SkWrazSQwVnnK01nTGGj20mNpkyL2Zoe",
    alt: "Girl with pot",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1ANWbg0x8XmIGLfooEHrnDIlgOecpm5BW",
    alt: "Goddess",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=12-scqFoci6snBoq55ZkxfVi03fIMnZdu",
    alt: "Harbour",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1yOYWtTL4ul4VdrCL_CHilWDSAXX3pBYE",
    alt: "Pinkie pie",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1Z24ErzcLqrRj3EXU7YR8_C8Wt2OT1Luy",
    alt: "Stitch",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1kmAjAscdVpF44vDk2oqj50k_dgw02B9w",
    alt: "Portrait girl",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1XrOEuisiSFeG-LHXlVGc27x6GP3SNqFy",
    alt: "Leafy girl",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=17_8kbYZvSSpWlU2CiCPrmCRSqlmiwbR-",
    alt: "Girl with pot",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1RmQs5XuH_QtNIpO62EjbanZ-EcvIe0wx",
    alt: "Girl saying cheese",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1gEac8OR5uUquw_56RNGEXvSFCa7bZro-",
    alt: "Pumpkin House",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1MKGYalPXi4d2-6itn7-U1ZIN72xWjyXK",
    alt: "Bunny",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1xPh3ZQv5VXEiJrpIVw_MSt23TqpUf16f",
    alt: "Pumpkin head",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1DISetKeWDX6kiexRejFfg0TpKUI89gEj",
    alt: "Mushroom hat girl",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=19OEM-zFbtlBY5FHAerJWm2PA4RY131CX",
    alt: "Cat holding flowers",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1yegWphCh4hpQSjX-FIG1VALk2kJIC1u6",
    alt: "Kawaii dog in pumpkin",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=13rhKMlO9RVBj_VIjZ2a6n0bRl0gJE9IF",
    alt: "Girl with cat on moon",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1Cfu-D2OAAmRZsfv1-_wDrKKLwDoKHtht",
    alt: "Magical girl",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1gvDFRBtiEqladbG1H6EIIBmb5va5Tztm",
    alt: "Chibis in pencil color",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1JMCoVnKx1-EjTWQsyhQ28QOnnH8QSomG",
    alt: "Kawaii serving",
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1DVDMQN8wrJV5lT9N1C6tWqZqeZJyAema",
    alt: "Elsa sleeping",
  },
];

/*

<div class="img-video-container">
<img
  src="images/elsa-sleeping.jpg"
  alt="Elsa sleeping"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/girl-shortdress.jpg"
  alt="Girl with short dress"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/avatar-style-girl.jpg"
  alt="Avatar style girl"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/portrait-girlface.jpg"
  alt="Portrait girl"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/abstract-females.jpg"
  alt="Abstract females"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/abstract-girl.jpg"
  alt="Abstract girl"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/village-framed.jpg"
  alt="Village"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img src="images/autumn.jpg" alt="Autumn" onclick="clickImage(src)" />
</div>

<div class="img-video-container">
<img
  src="images/girl-figure-laying.jpg"
  alt="Girl lying down"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/landscape-pen.jpg"
  alt="Landscape penwork"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/penwork-lying-back.jpg"
  alt="Penwork lying girl back"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img src="images/swans.jpg" alt="Swans" onclick="clickImage(src)" />
</div>

<div class="img-video-container">
<img
  src="images/snow-framed.jpg"
  alt="Snow"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/landscape-oil.jpg"
  alt="Landscape"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img src="images/snow.jpg" alt="Snow" onclick="clickImage(src)" />
</div>

<div class="img-video-container">
<img
  src="images/abstract-trees.jpg"
  alt="Abstract tress"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/abstract-geometric.jpg"
  alt="Abstract geometric"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/abstract-pots.jpg"
  alt="Abstract pots"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/abstract-instruments.jpg"
  alt="Abstract instruments"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/seascape.jpg"
  alt="Seascape"
  onclick="clickImage(src)"
/>
</div>

<div class="img-video-container">
<img
  src="images/sylvester.jpg"
  alt="Sylvester"
  onclick="clickImage(src)"
/>
</div>
*/

export default images;
