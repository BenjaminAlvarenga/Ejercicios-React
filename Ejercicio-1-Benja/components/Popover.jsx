import React from "react";

const Popover = ({ titulo }) => {
  return (
    <button type="button"
      class="btn btn-secondary"
      data-bs-container="body">
      {titulo}
    </button>
  );
};

export default Popover;
