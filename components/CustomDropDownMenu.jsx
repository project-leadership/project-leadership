import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as DropdownMenu from "zeego/dropdown-menu";

const CustomDropDownMenu = ({ Icon, items }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Icon />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {items.map((item, index) => {
          return (
            <DropdownMenu.Item key={index} onSelect={item.onPress}>
              <DropdownMenu.ItemTitle>{item.name}</DropdownMenu.ItemTitle>
            </DropdownMenu.Item>
          );
        })}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default CustomDropDownMenu;
