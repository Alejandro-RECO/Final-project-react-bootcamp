import React from "react";

import { Card, Img } from "./style";

const ContactCard = ({ $contact, children }) => {
  function addDefaultSrc(ev) {
    ev.target.src = "./img/user-skeleton.png";
  }
  return (
    <Card>
      <Img
        $favorite={$contact.favorite}
        src={`https://unavatar.io/@${$contact.name}`}
        alt={$contact.name}
        onError={addDefaultSrc}
      />
      <h2>
        {$contact.name} {$contact.last_name}
      </h2>
      <p>{$contact.email}</p>
      <div>{children}</div>
    </Card>
  );
};

export default ContactCard;
