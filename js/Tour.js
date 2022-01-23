AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;   
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "lion",
        title: "lion",
        url: "./assets/lion.jpg",
      },
      {
        id: "giraffe",
        title: "giraffe",
        url: "./assets/giraffe.jpg",
      },

      {
        id: "rino",
        title: "rino",
        url: "./assets/rino.jpg",
      },
      {
        id: "monkey",
        title: "monkey",
        url: "./assets/monkey.jpg",
      },
    ];
    
    let prevoiusYPosition = -45;

    for (var item of thumbNailsRef) {
      const posX = 0;
      const posY = prevoiusYPosition + 25;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusYPosition = posY;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.placesContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    console.log(id+" animal created")
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "#0077CC",
      opacity: 1,
    });

    return entityEl;
  },
  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
});
