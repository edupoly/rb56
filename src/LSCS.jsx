import React, { useState } from "react";

function LSCS() {
  let [likes, setLikesFn] = useState(0);
  let [shares, setSharesFn] = useState(0);
  let comments = 0;
  let saves = 0;
  function like() {
    setLikesFn(likes + 1);
  }
  function share() {
    setSharesFn(shares + 1);
  }
  return (
    <div className="border border-5 border-primary p-2 m-2">
      <i
        class="bi bi-hand-thumbs-up fs-1 mx-5"
        onClick={() => {
          like();
        }}
      >
        {likes}
      </i>
      <i
        class="bi bi-share fs-1 mx-5"
        onClick={() => {
          share();
        }}
      >
        {shares}
      </i>
      <i class="bi bi-chat fs-1 mx-5">{comments}</i>
      <i class="bi bi-bookmark fs-1 mx-5">{saves}</i>
    </div>
  );
}

export default LSCS;
