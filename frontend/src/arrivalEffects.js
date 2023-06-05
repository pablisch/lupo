// Get location of element and create two circle elements at that location with css effects
const arrivalEffectCreate = (elementId) => {
  const element = document.getElementById(elementId);
  const rect = element.getBoundingClientRect();

  // Get the position and dimensions of section element with a class of "arrival-effect"
  const mapAndButtons = document.querySelector(".arrival-effect");
  // const svg = document.querySelector("svg");
  const svgRect = mapAndButtons.getBoundingClientRect();

  // Calculate the center position of the circle within the SVG canvas
  const centerX = (rect.left - svgRect.left + rect.width / 2) + 129.5;
  const centerY = (rect.top - svgRect.top + rect.height / 2) + 49.8;

  const randomEffect1 = Math.floor(Math.random() * 2) + 1;

  // Use the center coordinates to position the circle element
  const arrival = document.createElement("div");
  arrival.style.width = "5px";
  arrival.style.height = "5px";
  // arrival.style.backgroundColor = "rgba(255, 0, 0, 0.4";
  arrival.style.borderRadius = "50%";
  arrival.style.position = "absolute";
  arrival.style.transform = "translate(-50%, -50%) scale(1)";
  arrival.style.top = `${centerY}px`;
  arrival.style.left = `${centerX}px`;
  arrival.style.zIndex = "1000";
  arrival.classList.add(`createArrival${randomEffect1}`);

  // Append the circle element to the parent container
  const container = document.querySelector(".arrival-effect");
  container.appendChild(arrival);

  const randomEffect2 = Math.floor(Math.random() * 2) + 1;

  let arrival2;
  // create a duplicate element in the same place after 0.1 seconds
  setTimeout(() => {
    const arrival2 = document.createElement("div");
    arrival2.style.width = "5px";
    arrival2.style.height = "5px";
    // arrival2.style.backgroundColor = "rgba(255, 0, 0, 0.4";
    arrival2.style.borderRadius = "50%";
    arrival2.style.position = "absolute";
    arrival2.style.transform = "translate(-50%, -50%) scale(1)";
    arrival2.style.top = `${centerY}px`;
    arrival2.style.left = `${centerX}px`;
    arrival2.style.zIndex = "1000";
    arrival2.classList.add(`createArrivalAfterShock${randomEffect2}`);
    container.appendChild(arrival2);
  }, 400);

  // remove both elements after 1 second
  setTimeout(() => {
    arrival.remove();
    if (arrival2) {
      arrival2.remove(); // Check if arrival2 exists before removing it
    }
  }, 2000);
};

// Apply css effects to the circle elements that exist in the svg already
const arrivalEffectTransform = (elementId) => {
  const centreEl = document.getElementById(elementId);
  // const outerEl = document.getElementById(arrivalPointOuter);
  //add the class of "active" to the element
  centreEl.classList.add("arrivalInner");
  // outerEl.classList.add("arrivalOuter");

  //remove the class of "active" after 1 second
  setTimeout(function () {
    centreEl.classList.remove("arrivalInner");
    // outerEl.classList.remove("arrivalOuter");
  }, 1500);
  console.log(centreEl.id);
}

export { arrivalEffectCreate, arrivalEffectTransform };