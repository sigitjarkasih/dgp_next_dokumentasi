import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function ArtikelEdit() {
  const histroy = useHistory();
  const { id } = useParams();

  console.log(id);
}

export default ArtikelEdit;
