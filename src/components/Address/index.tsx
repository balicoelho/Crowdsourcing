"use client";

import { StringUtils } from "@/utils/stringUtils";
import { Icon } from "@iconify/react/dist/iconify.js";

type AddressProps = AddressType;

const Address = ({ uf, city, neighborhood }: AddressProps) => {
  const capitalizedNeighborhood =
    StringUtils.capitalizeFirstCharacterInText(neighborhood);
  const capitalizedCity = StringUtils.capitalizeFirstCharacterInText(city);
  const address = `${capitalizedNeighborhood}, ${capitalizedCity} - ${uf.toUpperCase()}`;
  return (
    <div className="flex items-center gap-1 text-sm">
      <Icon icon="fluent:location-28-filled" />
      <span>{address}</span>
    </div>
  );
};

export default Address;
